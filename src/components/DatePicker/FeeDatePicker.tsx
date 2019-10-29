// react
import React from "react";

// kendo component
import {DatePicker, DatePickerChangeEvent, DatePickerProps} from '@progress/kendo-react-dateinputs';

// other
import moment from 'moment';
import dateUtil from "../util/dateUtil";

interface FeeDatePickerProps extends Omit<DatePickerProps, 'onChange' | 'defaultValue'> {

    defaultValue?: Date | string,
    onChange: (event: DatePickerChangeEvent, newValue: {}) => void
}

class FeeDatePicker extends React.Component<FeeDatePickerProps, { value?: Date | null }> {

    state = {
        value: undefined,
    };

    componentWillMount() {

        this.setState({
            value: this._getDefaultValue(this.props.defaultValue),
        });
    }

    _getDefaultValue = (defaultValue?: Date | string | { date: Date }): Date | undefined => {


        if (!defaultValue) {

            return undefined;

        } else if (defaultValue instanceof Date) {

            return defaultValue;

        } else if (typeof defaultValue === 'object') {

            return defaultValue.date;

        } else if (typeof defaultValue === 'string' && defaultValue.length === 8) {

            return dateUtil.getDate({date: defaultValue, format: 'YYYYMMDD'});

        } else if (typeof defaultValue === 'string' && defaultValue.length === 10) {

            return dateUtil.getDate({date: defaultValue, format: 'YYYY/MM/DD'});

        } else {

            throw new Error('you can only set type [object,Date,string] to defaultValue in FeeDatePicker');
            // return defaultValue;
        }
    };

    handleChange = (event: DatePickerChangeEvent) => {

        const date = event.value;

        const newValue = (date) ? {
            code: moment(date).format('YYYYMMDD'),
            show: moment(date).format('YYYY/MM/DD'),
            origin: date,
            date
        } : {
            code: undefined,
            show: undefined,
            origin: date,
            date
        };

        this.props.onChange && this.props.onChange(event, newValue);

        // 遇到一些 limit 狀況 , 不做資料更新
        this.setState({value: date});
    };

    render() {

        const {defaultValue, ...restProps} = this.props;

        return (
            <DatePicker
                {...restProps}
                width={'90%'}
                value={this.state.value}
                format="yyyy/MM/dd"
                onChange={this.handleChange}
            />
        )
    }
}

export default FeeDatePicker;
