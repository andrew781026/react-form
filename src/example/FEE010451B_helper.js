import {getDebounceFunc, getOptionObj, baseGetNewData, getWarnDataMsg} from "src/components/util/FeeTool";

const fieldMapper = {
    cargoLocation: '貨棧別',
    effectDate: '有效日期',
    chargeType: '費率代碼',
    custType: '客戶類別',
    customId: '客戶編號',
    custId: '客戶編號',
    discountRate: '優惠折扣率',
    disCountPrice: '優惠後單價',
    minCharge: '最低收費額',
    documentNo: '奉准文號',
};

const warnData = ({fieldName, value}) => {

    if (fieldName === 'customId') {

        return getWarnDataMsg({fieldName, value, maxLength: 8, chFieldName: '客戶編號'});

    } else if (fieldName === 'documentNo') {

        return getWarnDataMsg({fieldName, value, maxLength: 15, chFieldName: '奉准文號'});

    }

    return {};
};

const errDataFuncs = {
    customId: ({singleData, updateState, fieldName, value}) => {

        // custType (客戶類別) 為 A . F . I . C 其中一種
        if (singleData.custType && singleData.customId && updateState
            && ['A', 'F', 'I', 'C'].find(item => item === singleData.custType)) {

            // 如果有效日期不存在 且 客戶類型為記帳客戶
            if (!singleData.effectDate && singleData.custType === 'C') {

                // 取消 debounce
                getDebounceFunc('FEE010451B', 'customId').cancel();

                return {
                    customId: '檢驗記帳客戶編號時 , 有效日期為必輸條件',
                }
            }

            // 如果貨棧別不存在 且 客戶類型為記帳客戶
            if (!singleData.cargoLocation && singleData.custType === 'C') {

                // 取消 debounce
                getDebounceFunc('FEE010451B', 'customId').cancel();

                return {
                    customId: '檢驗記帳客戶編號時 , 貨棧別為必輸條件',
                }
            }

            const checkCustomId = () => {

                // custType = 'C' , 記帳客戶 , 需要用 cargoLocation , customId , effectDate 做檢查
                ReduxFEE010451B.AsyncMethods.checkCustomId({
                    custType: singleData.custType,
                    customId: singleData.customId,
                    cargoLocation: singleData.cargoLocation,
                    effectDate: singleData.effectDate
                }).then(data => {

                    updateState({errMessage: {customId: undefined}});

                }).catch((e) => {

                    console.log('checkCustomId func failed , e=', e);

                    if (e.status === 'W') {
                        updateState({errMessage: {customId: e.msg}});
                    }
                })
            };

            // 直接使用 debounce , 1 秒內使用者沒變更 , 才執行 checkCustomId 函式
            getDebounceFunc('FEE010451B', 'customId')(checkCustomId);

            return {
                customId: '提示:檢驗客戶編號中...',
            }

        } else {

            // 取消 debounce
            getDebounceFunc('FEE010451B', 'customId').cancel();

            return {
                customId: singleData.customId ? undefined : '客戶編號必須有值',
            }
        }

    },
    chargeType: ({singleData, updateState, fieldName, value}) => {

        if (singleData._isGettingValue && singleData.chargeType && singleData.effectDate && updateState) {

            const checkOthersRateAndGetMinChargeFunc = async () => {

                try {

                    const {minCharge, custType} = await ReduxFEE010451B.AsyncMethods.checkOthersRateAndGetMinCharge({
                        chargeType: singleData.chargeType,
                        effectDate: singleData.effectDate,
                    });

                    console.log('checkOthersRateAndGetMinCharge func success !!');

                    // 取得客戶類型後 , 檢查 客戶編號
                    const getErrMsgCustomId = async () => {

                        if (!singleData.customId) {

                            return '客戶編號必須有值';

                        } else if (singleData.customId && ['A', 'F', 'I', 'C'].find(item => item === singleData.custType)) {

                            // 如果有效日期不存在 且 客戶類型為記帳客戶
                            if (!singleData.effectDate && singleData.custType === 'C') {

                                return '檢驗記帳客戶編號時 , 有效日期為必輸條件';
                            }

                            // 如果貨棧別不存在 且 客戶類型為記帳客戶
                            if (!singleData.cargoLocation && singleData.custType === 'C') {

                                return '檢驗記帳客戶編號時 , 貨棧別為必輸條件';
                            }

                            try {

                                await ReduxFEE010451B.AsyncMethods.checkCustomId({
                                    custType: singleData.custType,
                                    customId: singleData.customId,
                                    cargoLocation: singleData.cargoLocation,
                                    effectDate: singleData.effectDate
                                });

                            } catch (e) {

                                return e.msg;
                            }
                        }

                        return undefined;
                    };

                    updateState({
                        singleData: {
                            _isGettingValue: false,
                            minCharge,
                            custType,
                            custTypeObj: getOptionObj(feeOptions.customerType02Options, custType) || {
                                code: '0',
                                show: '全部'
                            }, // 客戶類型
                        },
                        errMessage: {
                            minCharge: undefined,
                            custType: undefined,
                            customId: await getErrMsgCustomId()
                        }
                    });

                } catch (e) {

                    console.log('checkOthersRateAndGetMinCharge func failed , e=', e);

                    if (e.status === 'W') {
                        updateState({errMessage: {chargeType: e.msg}});
                    }

                }

            };

            // 將 async function 轉換成 一般 function
            const checkOthersRateAndGetMinCharge = () => checkOthersRateAndGetMinChargeFunc().then();

            // 直接使用 debounce , 1 秒內使用者沒變更 , 才執行 checkOthersRateAndGetMinCharge 函式
            getDebounceFunc('FEE010451B', 'chargeType')(checkOthersRateAndGetMinCharge);

            const errMsg = singleData.cancelDate ? undefined : '有效結束日期必須有值';

            return {
                minCharge: '提示:根據費率代碼取值中...',
                custType: '提示:根據費率代碼取值中...',
                chargeType: undefined,
                effectDate: errMsg
            }

        } else {

            // 取消 debounce
            getDebounceFunc('FEE010451B', 'chargeType').cancel();

            const errMsg = singleData.effectDate ? (singleData.cancelDate ? undefined : '有效結束日期必須有值') : '有效起始日期必須有值';

            return {
                minCharge: undefined,
                custType: undefined,
                chargeType: singleData.chargeType ? undefined : '費率代碼必須有值',
                effectDate: errMsg
            }
        }

    },
};

const errData = ({singleData, updateState, fieldName, value}) => {

    if (fieldName === 'chargeType' || fieldName === 'chargeTypeObj' || typeof fieldName === "object") {

        return errDataFuncs.chargeType({singleData, updateState, fieldName, value});

    } else if (fieldName === 'customId') {

        return errDataFuncs.customId({singleData, updateState, fieldName, value});

    } else if (fieldName === 'custType' || fieldName === 'custTypeObj') {

        return errDataFuncs.customId({singleData, updateState, fieldName, value});

    } else if (fieldName === 'effectDate') {

        // for form init
        return {
            effectDate: singleData.effectDate ? undefined : '有效起始日期必須有值'
        };

    } else if (fieldName === 'cancelDate') {

        // for form init
        return {
            effectDate: singleData.cancelDate ? undefined : '有效結束日期必須有值'
        };

    }

    return {};
};

const errQueryData = ({singleData, fieldName, value}) => {

    return {};
};

const validateData = ({singleData}) => {

    return undefined;
};

const getNewData = ({singleData, fieldName, value}) => {


    if (fieldName === 'disCountPrice') {

        return {
            discountRate: undefined,
            disCountPrice: value
        };

    } else if (fieldName === 'discountRate') {

        return {
            discountRate: value,
            disCountPrice: undefined
        };

    } else if (fieldName === 'chargeTypeObj') {

        return {
            _isGettingValue: Boolean(singleData.effectDate),
            chargeTypeObj: value,
            chargeType: value && value.code,
        };

    } else if (typeof fieldName === "object") {

        const {from, to} = fieldName;
        const {fromValue, toValue} = value;

        return {
            _isGettingValue: fromValue && fromValue.code && Boolean(singleData.chargeType) && singleData.effectDate !== fromValue.code,
            [`${from}Obj`]: fromValue,
            [from]: fromValue.code,
            [`${to}Obj`]: toValue,
            [to]: toValue.code,
        };

    }

    return baseGetNewData({fieldName, value});
};

export {
    warnData,
    errData,
    errQueryData,
    validateData,
    getNewData,
    fieldMapper,
};
