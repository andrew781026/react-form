# react-class-custom-form

這是將專案中的輸入元件做包裝 ( 下拉選單 . 日期選擇 . 文字輸入 . 單選按鈕 . 勾選元件 )



## Installation

```bash
$ yarn add react-class-custom-form
# or 
$ npm i react-class-custom-form --save
```



## Quick Example

```jsx
import { useField, splitFormProps } from 'react-form'
 
const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)
 
  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating },
    getInputProps,
  } = useField(field, fieldOptions)
 
  // Build the field
  return (
    <>
      <input
        {...getInputProps({ ref, ...rest })}
 
        // This will give us the following props:
        // {
        //   value: field.value,
        //   onChange: e => field.setValue(e.target.value),
        //   onBlur: e => field.setMeta({ isTouched: true }),
        //   ref,
        //   ...rest
        // }
        //
        // You can always wire this up on your own, but prop
        // getters are great for this!
      />
 
      {/*
        Let's inline some validation and error information
        for our field
      */}
 
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <em>{error}</em>
      ) : null}
    </>
  )
})
```



#### thanks for

[how-to-use-create-react-app-to-publish-an-npm-package](https://medium.com/@chimera.zen/how-to-use-create-react-app-to-publish-an-npm-package-3f29909a36db) help me make module to npm 

[react-form](https://www.npmjs.com/package/react-form) inspire me the idea the basic features should need 

