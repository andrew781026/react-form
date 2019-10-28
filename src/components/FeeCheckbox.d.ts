import {CheckboxProps} from "@material-ui/core/Checkbox";
import * as React from "react";

interface FeeCheckboxOnChangeValue {

    /**
     *  Checkbox string 對應的文字
     */
    code?: string,

    /**
     *  目前 checkbox 是否勾選
     */
    show?: boolean,

    /**
     *  目前 checkbox 是否勾選
     */
    checked?: boolean,

}

interface FeeCheckboxProps {

    /**
     *  勾選時 , string 對應文字
     */
    trueStr: string,

    /**
     *  沒有勾選時 , string 對應文字
     */
    falseStr: string,

    /**
     *  預設的 string 對應文字
     */
    defaultValue?: string,

    /**
     *  預設的是否勾選
     */
    defaultChecked?: boolean,

    /**
     *  勾選框旁的顯示文字
     */
    placeholder?: string,

    /**
     *  勾選框是否可用
     */
    disabled?: boolean,

    /**
     *  外部傳入的 onChange 函式 , value 會回傳 { code , show , checked } 物件
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: FeeCheckboxOnChangeValue) => void,

}

interface FeeCheckboxState {

    /**
     * check 對應中文值
     */
    value?: string | null,

    /**
     * checkbox 是否勾選
     */
    checked: boolean,

}


export {FeeCheckboxProps, FeeCheckboxState};
