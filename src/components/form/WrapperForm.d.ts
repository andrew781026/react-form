import * as React from "react";

interface ComponentProps {

    formFuncs: object,
    formData: object,

    /**
     *  其他參數
     *  參考資料 : https://stackoverflow.com/questions/33836671/typescript-interface-that-allows-other-properties
     */
    [x: string]: any
}

interface FormBodyInfo {

    // formRef: (formRef: any) => any,
    props: object,
    formFuncs: object,
    formData: object
}

interface WrapperFormProps {

    /**
     *  form 顯示時的預設值
     */
    defaultData: object,

    /**
     *  handleChange 後 , 處理要得到甚麼 newValue 的 function
     */
    getNewData: (input: object) => object,

    /**
     *  handleChange 後 , 根據 singleData , 得到  errMessages 紅色錯誤訊息
     */
    errMsgChecker?: (input: object) => object,

    /**
     *  handleChange 後 , 根據 singleData , 得到 warnMessages 黃色訊息提示
     */
    warnMsgChecker?: (input: object) => object,

    /**
     *  formValidate 後 , 根據 singleData , 得到 formErrMsg 及 根據 errMessages 顯示 validateMessages
     */
    validateChecker?: (input: object) => string | void,

    /**
     *  取得顯示的 form 元件
     */
    getFormBody: (formBodyInfo: FormBodyInfo) => any, // React.Component<ComponentProps, any>,

}

interface WrapperFormState {

    /**
     *  singleData 用於顯示資料
     */
    singleData: object,

    /**
     *  editData 用於記錄使用者更新過的欄位資料
     */
    editData: object,

    /**
     *  errMessages 紅色錯誤訊息
     */
    errMessages: {},

    /**
     *  warnMessages 黃色訊息提示
     */
    warnMessages: {},

    /**
     *  validateMessages 按 "儲存" 時 , 彈跳的訊息
     */
    validateMessages: {},

    /**
     *  form 表單的錯誤訊息
     */
    formErrMsg?: any,

}


export {WrapperFormProps, WrapperFormState};
