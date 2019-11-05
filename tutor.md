# FEE 共用元件說明


[TOC]



## Form 概念說明

表單輸入內部存有 

- singleData ( form 現在暫存之資料 ) . 
- editData ( 使用者修改過的資料 ) . 
- errMessages ( 立即檢查的使用者輸入錯誤 ) .
- formErrMsg ( click 按鈕後 , 顯示的錯誤訊息 ) 之後藉由 onChange . formValidate 將值放入不同的物件中顯示 

 

![1572485800957](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_09h33_45_hcqgou.png)

每次 onChange 都會觸發以下 function : 

- getNewData => 回傳結果會修改 singleData  與 editData 
- errMsgChecker =>  回傳結果會修改 errMessages 

每次 formValidate 都會觸發以下 function : 

- formValidate 

### 結構說明

> 以下為 `Form` 的基礎設定物件 `fieldMapper` . `alertMessage` . `FormRow` . `StyledFormCell`  之簡易說明

```jsx
<FeeStyledForm
    onRef={formRef} // 將 form 綁定到 WrapperForm.formRef 上 , 以利 formValidate 時做使用
    fieldMapper={FEE010109Q_helper.fieldMapper} // 將 alertMessage 上的英文 key 值對應中文 , 並顯示給使用者
    alertMessage={getFormErrMsg()} // 顯示給使用者看的錯誤訊息 ( object or string )
    >

    <FormRow> // row tag 
        <StyledFormCell // cell tag 
            widthWeight={{md: 2}} // 以 one row = 12 做分割
            cellStatus={feeProperty.cellStatus.editable}
            title='發票編號'
            >
            <FeeInput
                defaultValue={defaultData.invoiceNo}
                onChange={handleChange('invoiceNo')} // WrapperForm.handleChange 會觸發綁定的 getNewData 與 errMsgChecker 
                />
        </StyledFormCell>
        ...
</FeeStyledForm>
```

### 使用說明 & 範例

> 需要製作 `Form` 掛載 getNewData . errMsgChecker 等函數與 `FormBody` 設定實際顯示狀況





# 已包裝之 Form Input 

> 目前已將常用的使用者輸入元件做包裝 , 並固定其特定之使用模式



## 單選按鈕 ( RadioButtonGroup ) 

![1572489474708](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h37_52_n8wgca.png)

> data : 所有要顯示的可選擇項目 
>
> onChange : 包裝過的回乎函數 ( event , newValue : { code , show } ) => void

```jsx
<FeeRadioGroup
    defaultValue='N'
    onChange={handleChange('custAttribute')}
    data={[
        {code : 'N', show : '一般'},
        {code : 'A', show : '航空公司'},
        {code : 'F', show : '免費'},
        {code : 'B', show : '快遞客戶'},
    ]}
/>
```



## 勾選選項 ( CheckBox ) 

![1572489509197](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h38_27_y8mcmt.png)

> trueStr : checkbox 勾選時 , 對應的 code
>
> falseStr : checkbox 沒勾選時 , 對應的 code
>
> onChange : 包裝過的回乎函數 ( event , newValue : { code , show } ) => void

```jsx
<FeeCheckbox
    defaultValue='N'
    trueStr='Y'
    falseStr='N'
    onChange={handleChange('checkPreferIdObj')}
    value="checkPreferId"
    placeholder='需檢核優惠統編'
 />
```



## 下拉選單 ( ComboBox ) 

### FilterableComboBox 

![1572489599301](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h39_57_oahj5p.png)

> data : 所有要顯示的可選擇項目 
>
> defaultValue : 需傳入  { code , show } 物件做設定 
>
> onChange : 包裝過的回乎函數 ( event , newValue : { code , show } ) => void

```jsx
<FilterableComboBox
    data={[
        {code: 'Y', show: '提供帳單'},
        {code: 'N', show: '取消帳單'},
    ]}
    defaultValue={{code: 'Y', show: '提供帳單'}}
    onChange={handleChange('billPrintObj')}
 />
```


### PopupComboBox 

![1572489692662](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h41_27_ztxcdy.png)

![1572489681996](https://res.cloudinary.com/andrew781026/image/upload/v1572680791/markdown/2019-10-31_10h41_14_zpij5k.png)


> title : dialog 顯示的相關文字 ( ex: 選擇 `記帳客編` )
>
> data : dialog 中列表清單的所有資料
>
> onSelect : dialog 中選擇的 onClick 回乎函數 ( event , newValue : { code , show } ) => void
>
> columns : dialog 中列表清單的要顯示的 column 

```jsx
<PopupComboBox
    title='記帳客編'
    data={comboBoxRegisterCustomerData}
    textField="registerShow"
    dataItemKey="registerNo"
    onSelect={handleChange('registerNoObj')}
    columns={
        <>
        <GridColumn width='150px' field="cargoLocation" title="貨棧別" filter='text'/>
        <GridColumn width='150px' field="registerNo" title="客戶編號" filter='text'/>
        <GridColumn width='150px' field="effectDate" title="可用日期" filter='text'/>
        <GridColumn width='150px' field="incId" title="統一編號" filter='text'/>
        <GridColumn width='300px' field="fullName" title="客戶名稱" filter='text'/>
        </>
    }
 />
```



## 文字 / 數字輸入 ( FeeInput ) 



### 文字輸入

![1572489750350](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h42_27_g7g1ju.png)

> maskType: 決定輸入的類型  ( undefined = 無輸入遮罩 . string = 文字輸入遮罩 . number = 數字輸入 )
>
> mask : 遮罩格式 ( 詳情請見 https://www.telerik.com/kendo-react-ui/components/inputs/maskedtextbox/masks/ )
>
> onChange : 包裝過的回乎函數 ( event , newValue : string ) => void

```jsx
<FeeInput
    maskType='string'
    mask='AAAA'
    onChange={handleChange('registerNo')}
/>
```


### 數字輸入

![1572489763032](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h42_41_gmigfe.png)

> maskType: 決定輸入的類型  ( undefined = 無輸入遮罩 . string = 文字輸入遮罩 . number = 數字輸入 )
>
> min : 最小值 ( 目前全選後 delete 一定會是 0 , 不論最小值是否 > 0 )
>
> step : 變動量
>
> onChange : 包裝過的回乎函數 ( event , newValue : number ) => void

```jsx
<FeeInput
    maskType='number'
    min={0}
    max={100}
    step={0.01}
    onChange={handleChange('warningPer')}
/>
```




## 日期選擇 ( FeeDatePicker) 



### FeeDatePicker

![1572489565508](https://res.cloudinary.com/andrew781026/image/upload/v1572680790/markdown/2019-10-31_10h39_20_fkjel4.png)


> defaultValue : 需要是 JS 的日期物件
>
> onChange : 包裝過的回乎函數 ( event , newValue : { code , show , date } ) => void
>
> - code : YYYYMMDD 格式的日期 
> - show : YYYY/MM/DD 格式的日期
> - date : 日期

```jsx
<FeeDatePicker
    defaultValue={defaultData.payupEffectDateObj.date}
    onChange={handleChange('payupEffectDate')}
/>
```



### FeeDatePickerFromAndTo

> type : onChange 類型 ( followFrom : 起始日改變時 , 結束日一同便持同一天 )
>
> onFromChange : 包裝過的回乎函數 ( event , newValue : {fromValue , toValue} ) => void
>
> - fromValue :  { code , show , date } & toValue :  { code , show , date } 
> - type  === followFrom 時 , 會將 toValue 取代成新的 fromValue 
> - fromValue > toValue  時 , 會將 toValue 取代成新的 fromValue 
>
> onToChange : 包裝過的回乎函數 ( event , newValue : {fromValue , toValue} ) => void
>
> - fromValue :  { code , show , date } & toValue :  { code , show , date } 
> - toValue < fromValue  時 , 會將 fromValue  取代成新的 toValue 

```jsx
<FeeDatePickerFromAndTo
    type='followFrom'
    defaultFrom={queryInfo.openStartDateObj.date}
    defaultTo={queryInfo.openEndDateObj.date}
    onFromChange={handleChange({from: 'openStartDate', to: 'openEndDate'})}
    onToChange={handleChange({from: 'openStartDate', to: 'openEndDate'})}
 />
```



# 列表顯示 ( ListShow )

PageListShow

> 包裝 kendo -ui 中的 page grid - https://www.telerik.com/kendo-react-ui/components/grid/paging/

![1572680706373](https://res.cloudinary.com/andrew781026/image/upload/v1572680791/markdown/2019-11-02_15h45_01_ulxbow.png)



GroupListShow

> 包裝 kendo -ui 中的 group grid - https://www.telerik.com/kendo-react-ui/components/grid/grouping/grouping/

![1572680679340](https://res.cloudinary.com/andrew781026/image/upload/v1572680792/markdown/2019-11-02_15h44_23_s0mxld.png)

FilterListShow

包裝 kendo -ui 中的 filter grid - https://www.telerik.com/kendo-react-ui/components/grid/filtering/

![1572681674062](https://res.cloudinary.com/andrew781026/image/upload/v1572681685/markdown/2019-11-02_16h00_50_avbjts.png)



AnimateListShow

> 包裝 kendo -ui 中的 inline edit grid - https://www.telerik.com/kendo-react-ui/components/grid/editing/editing-all-cell/

![1572680679372](https://res.cloudinary.com/andrew781026/image/upload/v1572680985/markdown/2019-08-14_15h33_16_xgezo1.png)



InlineEditListShow

> 包裝 kendo -ui 中的 inline edit grid - https://www.telerik.com/kendo-react-ui/components/grid/editing/editing-all-cell/

![1572681177369](https://res.cloudinary.com/andrew781026/image/upload/v1572681185/markdown/2019-11-02_15h52_53_qkuzdh.png)