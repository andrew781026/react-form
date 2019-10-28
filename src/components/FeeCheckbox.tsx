import React from "react";

// material component
import {Checkbox, FormControlLabel, withStyles} from '@material-ui/core';

// ts defined
import {FeeCheckboxProps, FeeCheckboxState} from "./FeeCheckbox.d";

const StyleCheckbox = withStyles({
    root: {
        padding: '3px',
    }
})(Checkbox);

class FeeCheckbox extends React.PureComponent<FeeCheckboxProps, FeeCheckboxState> {

    static defaultProps = {
        defaultChecked: false,
        trueStr: '是',
        falseStr: '否'
    };

    state: FeeCheckboxState = {
        value: null,
        checked: false,
    };

    componentDidMount() {
        this.setState({
            value: this.props.defaultValue,
            checked: this.getChecked(this.props.defaultValue)
        });
    }

    getChecked = (value?: string): boolean => {

        switch (value) {
            case this.props.trueStr:
                return true;
            case this.props.falseStr:
                return false;
            default:
                return this.props.defaultChecked || false;
        }
    };

    getValue = (checked: boolean): string => (checked ? this.props.trueStr : this.props.falseStr);

    // the callback of material ui check.onChange
    handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void => {

        const newValue = {
            code: this.getValue(event.target.checked),
            show: event.target.checked,
            checked: event.target.checked
        };

        this.props.onChange && this.props.onChange(event, newValue);

        this.setState({
            value: this.getValue(event.target.checked),
            checked: event.target.checked
        });
    };

    render() {

        const {trueStr, falseStr, defaultValue, defaultChecked, placeholder, ...restProps} = this.props;

        return (
            <div style={{paddingLeft: '7px'}}>
                <FormControlLabel
                    control={
                        <StyleCheckbox
                            {...restProps}
                            disabled={this.props.disabled}
                            checked={this.state.checked}
                            onChange={this.handleChange}
                        />
                    }
                    label={this.props.placeholder}
                />
            </div>
        );
    }
}

export default FeeCheckbox;
