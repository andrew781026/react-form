export interface CommonFormData {
    queryInfo: any,
    singleData: any,
    editData: object,
    formErrMsg: object,
    warnMessages: object,
    errMessages: object,
    validateMessages: object
}

interface FormFuncs {

    updateState: ({singleData = {}, warnMessage = {}, errMessage = {}}) => void,
    initData: ({defaultData, errMsgChecker, warnMsgChecker}: { defaultData?: object, errMsgChecker?: object, warnMsgChecker?: object }) => void,
    formValidate: () => boolean,
    handleChange: (fieldName) => (event, value) => void,
    getAlertMessage: () => any,
    setFormErrMsg: (formErrMsg?: any) => void,
    getFormErrMsg: () => string | object | undefined,
}

export interface FormBodyProps {

    /**
     * WrapperQueryForm 定位
     */
    formRef: HTMLFormElement, // React.RefObject<WrapperQueryForm>;

    /**
     *  表單預設值
     */
    defaultData: any,


    /**
     *  表單中的 functions
     */
    formFuncs: FormFuncs,

    /**
     *  表單中的資料
     */
    formData: CommonFormData,
}
