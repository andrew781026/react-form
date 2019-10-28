import * as React from "react";
import PropTypes from "prop-types";

// kendo component
import {filterBy} from "@progress/kendo-data-query";
import {ComboBox, ComboBoxChangeEvent, ComboBoxFilterChangeEvent} from "@progress/kendo-react-dropdowns";

// ts defined
import {FilterableComboBoxProps, FilterableComboBoxState} from "./FilterableComboBox.d";

const Style = {
    combobox: {
        width: '90%',
        color: '#212529',
    }
};


class FilterableComboBox extends React.PureComponent<FilterableComboBoxProps, FilterableComboBoxState> {

    static propTypes = {
        data: PropTypes.array,
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    };

    state = {
        data: [...this.props.data],
        filter: null, // 沒輸入 filter 值 , 直接點下拉時 , 會出現 data=[{}] , 然後出錯 !
        value: null,
    };

    componentWillMount() {

        // dataItemKey 沒值時 , 設定 dataItemKey = code
        const {dataItemKey = 'code', textField = 'show'} = this.props;

        // const commonDefaultValue = {[dataItemKey]: undefined, [textField]: '請選擇'};

        const newDefaultValue = this.props.defaultValue; // || commonDefaultValue;

        this.setState({filter: newDefaultValue, value: newDefaultValue});
    }

    handleChange = (event: ComboBoxChangeEvent): void => {

        // 取得 value 物件
        const tempValue = event.target.value;

        // 將 newValue 組成 { code , show } 物件
        const newValue = tempValue && {code: tempValue.dataItemKey, show: tempValue.textField, ...tempValue};

        this.props.onChange && this.props.onChange(event, newValue);

        this.setState({
            value: event.target.value
        });
    };

    filterChange = (event: ComboBoxFilterChangeEvent): void => {

        this.setState({
            data: this.filterData(event.filter),
            filter: event.filter,
            value: Boolean(event.filter.value) ? this.state.value : undefined
        });
    };

    filterData(filter: any): any[] {
        const data = [...this.props.data];
        return filterBy(data, filter);
    }

    _getNewClearButton = ({clearButton, required}: { clearButton?: boolean, required?: boolean }) => {

        if (required || clearButton === false) {
            return false;
        }

        return true;
    };

    render() {

        // 如果 this.props 有 dataItemKey 會把現有的蓋掉
        return (
            <ComboBox
                textField="show"
                dataItemKey="code"
                placeholder='請選擇'
                {...this.props}
                style={{...Style.combobox, ...this.props.style}}
                clearButton={this._getNewClearButton(this.props)}
                value={this.state.value}
                data={(this.state.filter) ? this.state.data : this.props.data}
                filterable
                onFilterChange={this.filterChange}
                onChange={this.handleChange}
            />
        );
    }
}

export default FilterableComboBox;
