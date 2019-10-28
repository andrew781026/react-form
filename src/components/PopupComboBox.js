// react
import * as React from "react";
import PropTypes from "prop-types";

// kendo component
import {ComboBox} from "@progress/kendo-react-dropdowns";

// share component
import FilterListShow from "view/FEE/common/ListShow/FilterListShow";
import FeeDialog from "./FeeDialog";

const Style = {
    combobox: {
        width: '90%',
        color: '#212529',
    }
};

class PopupComboBox extends React.Component {

    static propTypes = {
        data: PropTypes.array,
        onSelect: PropTypes.func,
        columns: PropTypes.element.isRequired,
    };

    state = {
        data: (this.props.data) ? [...this.props.data] : [],
        value: null,
        showPopup: false
    };

    componentWillMount() {

        // 設定預設值
        this.setState({
            filter: this.props.defaultValue,
            value: this.props.defaultValue
        });
    }

    componentDidMount() {

        // 讓使用者不能修改 input 值
        this.combobox._input.readOnly = true;
    }

    handleOpen = (event) => {

        this.props.onOpen && this.props.onOpen(event);
        this.setState({showPopup: true});
    };

    handleChange = (event) => {

        const {dataItemKey, textField} = this.props;
        const newValue = {code: undefined, show: '請選擇', [dataItemKey]: undefined, [textField]: '請選擇'};
        this.props.onSelect && this.props.onSelect(event, newValue);

        this.setState({value: undefined});
    };

    handleSelect = (cellProps) => (event) => {

        const {dataItemKey, textField} = this.props;
        const value = cellProps.dataItem;

        const newValue = {code: value[dataItemKey], show: value[textField], ...value};

        this.props.onSelect && this.props.onSelect(event, newValue);
        this.setState({showPopup: false, value: cellProps.dataItem});
    };

    handlePopupOpen = () => this.setState({showPopup: true});
    handlePopupClose = () => this.setState({showPopup: false});

    renderContent = () => {

        // value.key 有值時 , 將 key 與 name 值 , 放入 filter 中
        const filter = this.state.value && this.state.value[this.props.dataItemKey] && {
            logic: "and",
            filters: [
                {field: this.props.dataItemKey, operator: "contains", value: this.state.value[this.props.dataItemKey]},
            ]
        };

        // 將 props.columns 當物件取出
        const columns = this.props.columns;

        return (
            <>
                <h3>篩選功能:只篩選出查詢頁後的資料</h3>
                <FilterListShow
                    pageable
                    data={this.props.data}
                    title={`${this.props.title}清單`}
                    filter={filter}
                    gridRowButtons={[{name: '選擇', onClick: this.handleSelect}]}
                >
                    {   // 取得 columns 物件中的 children
                        columns.props.children
                    }
                </FilterListShow>
            </>
        );
    };

    // 將下拉選單 , 改成彈跳視窗
    render() {

        return (
            <>
                <div onClick={this.handlePopupOpen}>
                    <ComboBox
                        ref={component => this.combobox = component}
                        textField="show"
                        dataItemKey="code"
                        placeholder='請選擇'
                        {...this.props}
                        style={{...Style.combobox, ...this.props.style}}
                        opened={false}
                        value={this.state.value}
                        data={[]} // 此 data 不重要 , 因為下拉選單不顯示
                        onOpen={this.handleOpen}
                        onChange={this.handleChange}
                    />
                </div>
                {
                    this.state.showPopup ? (
                        <FeeDialog
                            handleClose={this.handlePopupClose}
                            title={`選擇${this.props.title}`}
                            buttons={[
                                {name: '關閉', onClick: this.handlePopupClose}
                            ]}
                            content={this.renderContent()}
                        />
                    ) : ''
                }
            </>
        );
    }
}

export default PopupComboBox;
