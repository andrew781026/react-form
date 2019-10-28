// react
import React from "react";

import {ComboBoxChangeEvent, ComboBoxProps} from "@progress/kendo-react-dropdowns";

interface FilterableComboBoxProps extends Omit<ComboBoxProps, 'onChange'> {

    /**
     * Sets the data of the ComboBox ([more information and examples]({% slug binding_combobox %})).
     */
    data: any[];

    /**
     * Sets the data item field that represents the item text. If the data contains only primitive values, do not define it.
     */
    textField?: string;

    /**
     * Sets the key for comparing the data items of the ComboBox. If `dataItemKey` is not set, the ComboBox compares the items by reference ([see example]({% slug binding_combobox %}#toc-datasets-of-objects)).
     */
    dataItemKey?: string;

    /**
     *  css 設定
     */
    classes?: object,

    /**
     *  預設的文字
     */
    defaultValue?: object | string | number | null,

    /**
     *  外部傳入的 onChange 函式 , value 會回傳 目前輸入的文字
     */
    onChange?: (event: ComboBoxChangeEvent, value: string) => void,

}

interface FilterableComboBoxState {

    /**
     * comboBox 內部的所有值
     */
    data?: any[],

    /**
     * comboBox 目前資料
     */
    value?: any | null,

    /**
     * comboBox 篩選條件
     */
    filter?: any | null,

}

export {FilterableComboBoxProps, FilterableComboBoxState};
