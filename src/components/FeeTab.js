/*
    Author: andrew
    Date: 2019/07/15
    Usage: Render FeeTabBar
*/

// react
import React from "react";
import PropTypes from "prop-types";

// material component
import {Tabs, Tab, AppBar, Paper, withStyles} from "@material-ui/core";

const tabStyles = () => ({
    tabcontainer: {
        padding: '12px 12px 12px 12px',
    },
    tab: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
});

/*
    Usage: Render FeeTabBar
    Props:
        defaultTabValue: 預設顯示的頁籤,
        data: 頁籤相關資料,
        onChange: 切換頁籤時的處理函式,
        disabled: 頁籤選擇是否禁用,
    state:
        tabValue: 目前頁籤參數值
*/
class FeeTabBar extends React.PureComponent {

    static propTypes = {
        data: PropTypes.array.isRequired,
    };

    state = {
        tabValue: 0
    };

    handleTabValueChange = (event, newValue) => this.setState({tabValue: newValue});

    renderTabTitle = (data) => {

        const {classes} = this.props;

        return data.map((element, index) => (<Tab key={index} className={classes.tab} label={element.label}/>))
    };

    renderTabContent = (data) => {

        const {tabValue} = this.state;
        const {classes} = this.props;

        return data.map((element, index) => (

            tabValue === index &&
            <Paper key={index} square className={classes.tabcontainer}>{element.control}</Paper>
        ))
    };

    render() {

        const {tabValue} = this.state;

        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={tabValue}
                        onChange={this.handleTabValueChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        {this.renderTabTitle(this.props.data)}
                    </Tabs>
                </AppBar>
                {this.renderTabContent(this.props.data)}
            </div>
        )
    }

}

export default withStyles(tabStyles)(FeeTabBar);
