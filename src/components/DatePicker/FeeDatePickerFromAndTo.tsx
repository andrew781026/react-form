// react
import React from "react";
import PropTypes from "prop-types";

// material ui
import {Grid} from "@material-ui/core";

// fee shared component
import moment from "moment";
import {DatePicker, DatePickerChangeEvent, DatePickerProps} from "@progress/kendo-react-dateinputs";

interface FeeDatePickerFromAndToProps extends Omit<DatePickerProps, 'onChange' | 'defaultValue'> {

    type?: string,
    defaultFrom?: Date | string,
    defaultTo?: Date | string,
    onFromChange: (event: DatePickerChangeEvent, newValue: {}) => void,
    onToChange: (event: DatePickerChangeEvent, newValue: {}) => void
}

class FeeDatePickerFromAndTo extends React.PureComponent<FeeDatePickerFromAndToProps, { fromValue?: Date | string, toValue?: Date | string }> {

    state = {
        fromValue: undefined,
        toValue: undefined,
    };

    componentWillMount() {
        this.setState({
            fromValue: this.props.defaultFrom,
            toValue: this.props.defaultTo,
        });
    }

    getNewValueObj = (date?: Date | string) => {

        const newValue = (date) ? {
            code: moment(date).format('YYYYMMDD'),
            show: moment(date).format('YYYY/MM/DD'),
            origin: date,
            date: date
        } : {
            code: undefined,
            show: undefined,
            origin: date,
            date: date
        };

        return newValue;
    };

    isChangeValue = (fromValue?: Date, toValue?: Date) => (fromValue && toValue && fromValue.getTime() > toValue.getTime()); // 結束日期比開始日期小

    handleFromChange = (event: DatePickerChangeEvent) => {

        const fromDate = (event.value) ? event.value : undefined;
        const toValue = this.state.toValue;

        let newToDate;

        // 跟隨開始日
        if (fromDate && this.props.type === 'followFrom') {

            newToDate = fromDate;

        } else if (this.isChangeValue(fromDate, toValue)) {

            newToDate = fromDate;

        } else {

            newToDate = this.state.toValue
        }

        this.setState({fromValue: fromDate, toValue: newToDate});

        const newFromValue = this.getNewValueObj(fromDate);
        const newValues = {fromValue: newFromValue, toValue: this.getNewValueObj(newToDate)};
        this.props.onFromChange && this.props.onFromChange(event, newValues);
    };

    handleToChange = (event: DatePickerChangeEvent) => {

        const toDate = (event.value) ? event.value : undefined;
        const newFromDate = (this.isChangeValue(this.state.fromValue, toDate)) ? toDate : this.state.fromValue;
        this.setState({fromValue: newFromDate, toValue: toDate});

        const newToValue = this.getNewValueObj(toDate);
        const newValues = {fromValue: this.getNewValueObj(newFromDate), toValue: newToValue};
        this.props.onToChange && this.props.onToChange(event, newValues);
    };

    render() {

        const {defaultFrom, defaultTo, onFromChange, onToChange, ...restProps} = this.props;

        return (
            <Grid container>
                <Grid item xs={5}>
                    <DatePicker
                        {...restProps}
                        width={'90%'}
                        onChange={this.handleFromChange}
                        value={this.state.fromValue}
                        format="yyyy/MM/dd"
                        validationMessage="請輸入正確的時間格式"
                    />
                </Grid>
                <Grid item xs={1} style={{textAlign: 'center'}}>
                    ~
                </Grid>
                <Grid item xs={5}>
                    <DatePicker
                        {...restProps}
                        width={'90%'}
                        onChange={this.handleToChange}
                        value={this.state.toValue}
                        format="yyyy/MM/dd"
                        validationMessage="請輸入正確的時間格式"
                    />
                </Grid>
            </Grid>
        );
    }
}

export default FeeDatePickerFromAndTo;
