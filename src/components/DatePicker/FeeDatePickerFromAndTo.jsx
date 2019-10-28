// react
import React from "react";
import PropTypes from "prop-types";

// material ui
import {Grid} from "@material-ui/core";

// fee shared component
import moment from "moment";
import {DatePicker} from "@progress/kendo-react-dateinputs";

class FeeDatePickerFromAndTo extends React.PureComponent {

    static propTypes = {
        defaultFrom: PropTypes.any,
        defaultTo: PropTypes.any,
        onFromChange: PropTypes.func.isRequired,
        onToChange: PropTypes.func.isRequired,
    };

    state = {
        fromValue: null,
        toValue: null,
    };

    componentWillMount() {
        this.setState({
            fromValue: this.props.defaultFrom,
            toValue: this.props.defaultTo,
        });
    }

    getNewValueObj = (date) => {

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

    isChangeValue = (fromValue, toValue) => (fromValue && toValue && fromValue.getTime() > toValue.getTime()); // 結束日期比開始日期小

    handleFromChange = (event) => {

        const fromDate = event.value;

        let newToDate;

        // 跟隨開始日
        if (fromDate && this.props.type === 'followFrom') {

            newToDate = fromDate;

        } else if (this.isChangeValue(fromDate, this.state.toValue)) {

            newToDate = fromDate;

        } else {

            newToDate = this.state.toValue
        }

        this.setState({fromValue: fromDate, toValue: newToDate});

        const newFromValue = this.getNewValueObj(fromDate);
        const newValues = {fromValue: newFromValue, toValue: this.getNewValueObj(newToDate)};
        this.props.onFromChange && this.props.onFromChange(event, newValues);
    };

    handleToChange = (event) => {

        const toDate = event.value;
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
