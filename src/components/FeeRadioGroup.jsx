/*
    Author: andrew
    Date: 2019/06/27
    Usage: Render Fee Custom RadioGroup
*/

// react
import * as React from "react";
import PropTypes from "prop-types";

// material component
import {FormControlLabel, Radio, RadioGroup, withStyles} from "@material-ui/core";

const StyleRadio = withStyles({
    root: {
        padding: '3px',
    }
})(Radio);

/*
    Usage: Render FeeRadioGroup
    Props:
        defaultValue: 預設值,
        data: 單選按鈕所有選項,
        onChange: 選單按鈕改變的處理函式,
        disabled: 單選按鈕是否禁用,
    state:
        value: 目前數值,
*/
class FeeRadioGroup extends React.Component {

    static propTypes = {
        defaultValue: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired,
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        disabled: false
    };

    state = {
        value: null,
    };

    componentWillMount() {

        this.setState({
            value: this.props.defaultValue,
        });
    }

    handleChange = (event, value) => {

        // disabled 時 , 將 radio button 上鎖 , 不做 handleChange
        if (this.props.disabled) return;

        // 取得 value 物件
        const tempValue = this.props.data.find(obj => ((obj.value || obj.code) === event.target.value));

        // 將 newValue 組成 { code , show } 物件
        const newValue = {code: tempValue.value, show: tempValue.label, ...tempValue};

        this.props.onChange && this.props.onChange(event, newValue);
        this.setState({value});
    };

    render() {

        return (
            <div style={{paddingLeft: '7px'}}>
                <RadioGroup
                    {...this.props}
                    defaultValue={this.props.defaultValue}
                    value={this.state.value}
                    style={{display: 'inline'}}
                    onChange={this.handleChange}
                >
                    {
                        this.props.data.map((element, index) => (
                            element && (
                                <FormControlLabel
                                    key={'radio-' + index}
                                    disabled={this.props.disabled}
                                    value={element.value || element.code}
                                    label={element.label || element.show}
                                    onKeyDown={this.props.onKeyDown}
                                    control={<StyleRadio/>}
                                />
                            )
                        ))
                    }
                </RadioGroup>
            </div>
        );
    }
}

export default FeeRadioGroup;
