
export interface CommonFormData {
    queryInfo: any,
    singleData: any,
    formErrMsg: object,
    warnMessages: object,
    errMessages: object,
    validateMessages: object
}

interface FormFuncs {
    // eslint-disable-next-line no-restricted-globals
    handleChange: (fieldName) => (event, value) => void,
    getAlertMessage: () => any,
    getFormErrMsg: () => string | object,
}

export interface FormBodyProps {

    /**
     * WrapperQueryForm 定位
     */
    formRef: any, // React.RefObject<WrapperQueryForm>;

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
