import React from "react";
import {initMessages} from "../util/FeeTool";
import {getDataOriginPK, objIsEmpty, objNotEmpty} from "../util/FeeTool";

// ts defined
import {WrapperFormProps, WrapperFormState} from "./WrapperForm.d";

class WrapperForm extends React.Component<WrapperFormProps, WrapperFormState> {

    /**
     * 表單定位
     */
    formRef?: HTMLFormElement;

    state: WrapperFormState = {
        singleData: {}, // singleData 用於顯示資料
        editData: {},   // editData 用於記錄使用者更新過的欄位資料
        errMessages: {}, // errMessages 紅色錯誤提示
        warnMessages: {}, // warnMessages 黃色訊息提示
        validateMessages: {}, // validateMessages 按 "儲存" 時 , 彈跳的訊息
        formErrMsg: undefined, // form 表單的錯誤訊息
    };

    componentWillMount() {

        const {defaultData, errMsgChecker, warnMsgChecker} = this.props;

        this.initData({defaultData, errMsgChecker, warnMsgChecker});
    }

    initData = ({defaultData = {}, errMsgChecker = {}, warnMsgChecker = {}}: { defaultData?: object, errMsgChecker?: object, warnMsgChecker?: object }) => {

        this.setState({
            singleData: {
                ...defaultData
            },
            errMessages: {
                ...initMessages({
                    data: defaultData,
                    messageChecker: errMsgChecker
                })
            },
            warnMessages: {
                ...initMessages({
                    data: defaultData,
                    messageChecker: warnMsgChecker
                })
            },
            validateMessages: {},
        });
    };

    updateState = ({singleData = {}, warnMessage = {}, errMessage = {}}) => {

        this.setState({
            singleData: {
                ...this.state.singleData,
                ...singleData
            },
            editData: {
                ...this.state.editData,
                ...singleData
            },
            warnMessages: {
                ...this.state.warnMessages,
                ...warnMessage
            },
            errMessages: {
                ...this.state.errMessages,
                ...errMessage
            }
        });

    };

    handleChange = (fieldName: string | { from: string, to: string }) => (event: any, value: { code?: string, show?: string } | string) => {

        // errMsgChecker = undefind 時 , let errMsgChecker = () => ({}) , 回傳空物件
        const {getNewData, errMsgChecker = () => ({}), warnMsgChecker = () => ({})} = this.props;

        // 先取得新 singleData
        const newSingleData = {
            ...this.state.singleData,
            ...getNewData({
                state: this.state,
                singleData: this.state.singleData,
                updateState: this.updateState,
                fieldName,
                value
            })
        };

        // 先取得新 editData
        const newEditData = {
            ...this.state.editData,
            ...getNewData({
                state: this.state,
                singleData: newSingleData,
                updateState: this.updateState,
                fieldName,
                value
            })
        };

        // newErrMessages 可用新資料得出 , 不一定限制於哪欄位變更 , 才做 errMessages 的顯示
        const newErrMessages = {
            ...this.state.errMessages,
            ...errMsgChecker({
                singleData: newSingleData,
                updateState: this.updateState,
                fieldName,
                value
            })
        };

        const newWarnMessages = {
            ...this.state.warnMessages,
            ...warnMsgChecker({
                singleData: newSingleData,
                updateState: this.updateState,
                fieldName,
                value
            })
        };

        this.setState({
            singleData: newSingleData,
            editData: newEditData,
            errMessages: newErrMessages,
            warnMessages: newWarnMessages,
            validateMessages: {},
            formErrMsg: undefined
        });

    };

    setFormErrMsg = (formErrMsg?: any) => this.setState({formErrMsg});

    formValidate = () => {

        if (this.formRef && !this.formRef.reportValidity()) {
            return false;
        }

        const {validateChecker} = this.props;

        const formErrMsg = validateChecker && validateChecker({singleData: this.state.singleData});

        if (formErrMsg) {

            this.setState({validateMessages: this.state.errMessages, formErrMsg});
            return false;

        } else if (objNotEmpty(this.state.errMessages)) {

            this.setState({validateMessages: this.state.errMessages});
            return false;

        } else {

            // formValidate 沒問題時 , 先將 formErrMsg 設定成 undefined
            this.setState({formErrMsg: undefined});
            return true;
        }

    };

    getFormErrMsg = () => {

        const {formErrMsg, errMessages} = this.state;

        const newErrMessages = objIsEmpty(errMessages) ? undefined : errMessages;

        return (formErrMsg && typeof formErrMsg === 'string') ? formErrMsg : newErrMessages;
    };

    getEditData = () => ({
        ...getDataOriginPK(this.props.defaultData),
        ...this.state.editData
    });

    getSingleData = () => this.state.singleData;
    getQueryInfo = () => this.state.singleData;

    render() {

        const {getFormBody, ...restProps} = this.props;

        const newProps = {
            ...restProps,
            formRef: (formRef: HTMLFormElement) => this.formRef = formRef,
        };

        return getFormBody({
            props: newProps,
            formFuncs: {
                formValidate: this.formValidate,
                setFormErrMsg: this.setFormErrMsg,
                getFormErrMsg: this.getFormErrMsg,
                getAlertMessage: this.getFormErrMsg,
                handleChange: this.handleChange,
                updateState: this.updateState,
                initData: this.initData,
            },
            formData: {
                queryInfo: this.state.singleData,
                singleData: this.state.singleData,
                editData: this.state.editData,
                warnMessages: this.state.warnMessages,
                errMessages: this.state.errMessages,
                validateMessages: this.state.validateMessages,
                formErrMsg: this.state.formErrMsg,
            }
        });
    }
}

export default WrapperForm;
