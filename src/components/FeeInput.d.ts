// react
import React from "react";

import {InputProps, MaskedTextBoxChangeEvent, NumericTextBoxChangeEvent} from "@progress/kendo-react-inputs";

interface FeeInputProps extends Omit<InputProps> {

    /**
     *  輸入類型 : 數字 . 文字
     */
    maskType?: 'number' | 'text' | 'string',

    /**
     *  遮罩格式
     */
    mask?: string,

    /**
     *  遮罩紅框顯示
     */
    maskValidation?: boolean,

    /**
     *  css 設定
     */
    classes?: object,

    /**
     *  預設的文字
     */
    defaultValue?: string | number | null,

    /**
     *  是否顯示紅框
     */
    feeValidate?: boolean | null,

    /**
     *  外部傳入的 onChange 函式 , value 會回傳 目前輸入的文字
     */
    onChange?: (event: MaskedTextBoxChangeEvent | NumericTextBoxChangeEvent | React.ChangeEvent<HTMLInputElement>, value: string | number | null) => void,

    /**
     *  長度限制
     */
    maxLength?: number,

    /**
     *  數字的最小值限制
     */
    min?: number,

    /**
     *  數字的最大值限制
     */
    max?: number,

    /**
     *  數字的上下時 , 每次增減多少
     */
    step?: number,

    /**
     *  錯誤時 , submit 後 , 顯示的提示文字
     */
    validationMessage?: string,

}

interface FeeInputState {

    /**
     * input 目前文字
     */
    value?: string | number | null,

}

export {FeeInputProps, FeeInputState};
