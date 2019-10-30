# react-class-custom-form

這是將專案中的輸入元件做包裝 ( 下拉選單 . 日期選擇 . 文字輸入 . 單選按鈕 . 勾選元件 )



## Installation

```bash
$ yarn add react-class-custom-form
# or 
$ npm i react-class-custom-form --save
```



## Quick Example

FeeFormHelper - logic helper to do onChange

```jsx
import {getDebounceFunc, baseGetNewData, getWarnDataMsg} from "react-class-custom-form";

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
                console.log('errDataFuncs.customId.checkCustomId');
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

                    console.log('checkOthersRateAndGetMinCharge func success !!');

                    updateState({
                        singleData: {
                            _isGettingValue: false,
                            minCharge: 55,
                            custType: 66,
                            custTypeObj: {code: '0', show: '全部'}, // 客戶類型
                        },
                        errMessage: {
                            minCharge: undefined,
                            custType: undefined,
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
```



SampleQuery

```jsx
import * as React from 'react';
import {
    FeeTaskbar,
    FeeRadioGroup,
    FeeInput,
    FeeStyledForm,
    FormRow,
    StyledFormCell,
    FeeDatePicker,
    FilterableComboBox,
    WrapperForm,
    feeProperty,
    feeOptions,
} from "react-class-custom-form";
import * as FeeFormHelper from "./FeeFormHelper";

class QueryFormBody extends React.Component {

    render() {

        const {formRef, othersRateData} = this.props;
        const {handleChange, getFormErrMsg} = this.props.formFuncs;
        const {queryInfo, warnMessages, errMessages, validateMessages} = this.props.formData;
        const messages = {warnMessages, errMessages, validateMessages};

        return (
            <FeeStyledForm
                onRef={formRef}
                fieldMapper={FeeFormHelper.fieldMapper}
                alertMessage={getFormErrMsg()}
            >

                <FormRow>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.required}
                        title='貨棧別'
                    >
                        <FeeRadioGroup
                            defaultValue={'C'}
                            onChange={handleChange('cargoLocationObj')}
                            data={[
                                {show: '台北', code: 'C'},
                                {show: '高雄', code: 'K'}
                            ]}
                        />
                    </StyledFormCell>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='生效日期'
                    >
                        <FeeDatePicker
                            defaultValue={new Date()}
                            onChange={handleChange('effectDate')}
                        />
                    </StyledFormCell>
                </FormRow>

                <FormRow>
                    <StyledFormCell
                        widthWeight={{md: 4}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='客戶類別'
                    >
                        <FilterableComboBox
                            data={feeOptions.customerType02Options}
                            defaultValue={{code: '0', show: '全部'}}
                            onChange={handleChange('custTypeObj')}
                        />
                    </StyledFormCell>
                    <StyledFormCell
                        widthWeight={{md: 8}}
                        cellStatus={feeProperty.cellStatus.editable}
                        title='客戶編號'
                    >
                        <FeeInput
                            onChange={handleChange('custId')}
                        />
                    </StyledFormCell>
                </FormRow>

            </FeeStyledForm>
        )
    }

}

class QueryForm extends React.Component {

    defaultData = {
        cargoLocation: 'C',
    };

    renderFormBody = ({props, formFuncs, formData}) => {

        return formFuncs && <QueryFormBody {...props} {...this.props} formFuncs={formFuncs} formData={formData}/>
    };

    render() {

        return (
            <WrapperForm
                ref={this.props.onRef}
                getFormBody={this.renderFormBody}
                defaultData={this.defaultData}
                getNewData={FeeFormHelper.getNewData}
            />
        )
    }

}

class SampleQuery extends React.Component {

    queryFormRef;

    handleSearchClick = () => this.queryFormRef && this.queryFormRef.formValidate() && console.log('form validate success !!!');

    render() {

        return (
            <>
                <FeeTaskbar
                    buttons={[
                        {
                            name: '查詢',
                            onClick: this.handleSearchClick,
                        },
                    ]}
                />
                <QueryForm

                    othersRateData={[
                        {
                            chargeType: 'A01', // 費率代碼
                            chargeDesc: '一般'  // 費率名稱
                        }
                    ]}

                    onRef={(queryFormRef) => this.queryFormRef = queryFormRef}/>
            </>
        );
    }
}

export default SampleQuery;

```



#### thanks for

[how-to-use-create-react-app-to-publish-an-npm-package](https://medium.com/@chimera.zen/how-to-use-create-react-app-to-publish-an-npm-package-3f29909a36db) help me make module to npm 

[react-form](https://www.npmjs.com/package/react-form) inspire me the idea the basic features should need 

