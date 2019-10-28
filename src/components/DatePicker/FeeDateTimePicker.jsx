// react
import React from "react";
import PropTypes from "prop-types";

// kendo component
import {DateTimePicker} from '@progress/kendo-react-dateinputs';

// other
import moment from 'moment';

const Style = {
    datePicker: {
    }
};

class FeeDateTimePicker extends React.Component {

    static propTypes = {
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
        onChange: PropTypes.func.isRequired,
    };

    state = {
        value: null,
    };

    componentWillMount() {
        this.setState({
            value: this.props.defaultValue,
        });
    }

    handleChange = (event) => {

        // disabled 時 , 將 DatePicker 上鎖 , 不做 handleChange
        if (this.props.disabled) return;

        const date = event.value;

        const newValue = {
            code: moment(date).format('YYYYMMDD HH:mm:SS'),
            show: moment(date).format('YYYY/MM/DD HH:mm:SS'),
            origin: date
        };

        // const newEvent = {target: {value: date}};
        this.props.onChange && this.props.onChange(event, newValue);
        this.setState({value: date});
    };

    render() {

        return (
            <DateTimePicker
                {...this.props}
                width={'90%'}
                style={Style.datePicker}
                value={this.state.value}
                format="yyyy/MM/dd"
                validationMessage="請輸入正確的時間格式"
                onChange={this.handleChange}
            />
        )
    }
}

export default FeeDateTimePicker;
