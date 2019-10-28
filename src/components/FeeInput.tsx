// react
import * as React from "react";

// material component
import {withStyles} from '@material-ui/core/styles';

// kendo component
import {
    MaskedTextBox,
    NumericTextBox,
    Input,
    NumericTextBoxChangeEvent,
    MaskedTextBoxChangeEvent
} from '@progress/kendo-react-inputs'

// ts defined
import {FeeInputProps, FeeInputState} from "./FeeInput.d";

// fee tool
import {getByteCount} from "./util/FeeTool";

// boxShadow 參考資料 : https://css-tricks.com/snippets/css/glowing-blue-input-highlights/
const inputStyles = () => ({
    input: {
        width: '90%'
    },
    error: {
        border: '1px solid red',
        '&:focus': {
            border: '1px solid red',
            boxShadow: '0 0 5px red'
        },
        '&:hover': {
            border: '1px solid red',
            boxShadow: '0 0 5px red'
        }
    },
});

class FeeInput extends React.PureComponent<FeeInputProps, FeeInputState> {

    state: FeeInputState = {
        value: undefined,
    };

    componentWillMount() {
        this.setState({value: this.props.defaultValue});
    }

    getClassName = ({feeValidate, classes}: { feeValidate: any, classes: any }): string => {

        return (feeValidate === false) ? `${classes.input} ${classes.error}` : classes.input;
    };

    maxLengthChecker = ({value, maxLength}: { value: string | number | null, maxLength?: number }) => {

        /*

        JS 判斷中文字 ( 中文長度 * 3 , 其他長度 * 1 )

        https://dotblogs.com.tw/greens/archive/2010/11/25/19710.aspx

        https://blog.csdn.net/qq_35661171/article/details/78967827

        https://blog.csdn.net/yenange/article/details/7463897

        */

        return (value && maxLength && getByteCount(value.toString()) > maxLength);
    };

    handleChange = (event: MaskedTextBoxChangeEvent | NumericTextBoxChangeEvent | React.ChangeEvent<HTMLInputElement>): void => {

        const {maxLength, maskType, min, max} = this.props;

        const value = event.target.value;

        if (maskType !== 'number' && this.maxLengthChecker({value, maxLength})) {

            return;

        } else {

            this.props.onChange && this.props.onChange(event, value);

            this.setState({value: value});
        }

    };

    render() {

        const {maskType, feeValidate, classes, defaultValue, ...restProps} = this.props;

        if (this.props.maskType === 'number') {

            // format 參考資料 : https://www.telerik.com/kendo-react-ui/components/inputs/numerictextbox/formats/
            return (
                <NumericTextBox
                    className={this.getClassName({feeValidate, classes})}
                    {...restProps}
                    value={(typeof this.state.value === "number") ? this.state.value : 0}
                    onChange={this.handleChange}
                />
            )

        } else if (this.props.maskType === 'text' || this.props.maskType === 'string') {

            // mask 參考資料 : https://www.telerik.com/kendo-react-ui/components/inputs/maskedtextbox/masks/

            // maskValidation={false} 關閉 mask 紅框
            return (
                <MaskedTextBox
                    className={this.getClassName({feeValidate, classes})}
                    {...restProps}
                    value={(typeof this.state.value === "string") ? this.state.value : ''}
                    onChange={this.handleChange}
                />
            )

        } else {

            return (
                <Input
                    type='text'
                    className={this.getClassName({feeValidate, classes})}
                    {...restProps}
                    value={(typeof this.state.value === "string") ? this.state.value : ''}
                    onChange={this.handleChange}
                />
            )
        }

    }
}

export default withStyles(inputStyles)(FeeInput);
