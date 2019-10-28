// react
import React from "react";
import PropTypes from "prop-types";

// kendo component
import {DatePicker} from '@progress/kendo-react-dateinputs';

// other
import moment from 'moment';
import dateUtil from "view/FEE/common/util/dateUtil";

class FeeDatePicker extends React.Component {

    static propTypes = {
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        onChange: PropTypes.func.isRequired,
    };

    state = {
        value: null,
    };

    componentWillMount() {

        this.setState({
            value: this._getDefaultValue(this.props.defaultValue),
        });

        /*
        this.setState({
            value: this.props.defaultValue,
        });
        */
    }

    _getDefaultValue = (defaultValue) => {


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

            return defaultValue;

        }
    };

    handleChange = (event) => {

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

        return (
            <DatePicker
                {...this.props}
                width={'90%'}
                value={this.state.value}
                format="yyyy/MM/dd"
                onChange={this.handleChange}
            />
        )
    }
}

export default FeeDatePicker;
