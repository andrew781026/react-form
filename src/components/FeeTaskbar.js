// react
import * as React from 'react';
import PropTypes from "prop-types";

// material component
import {Button, withStyles} from '@material-ui/core';

const StyledToolbarButton = withStyles({
    root: {
        borderRadius: '0px',
        background: '-webkit-linear-gradient(top, #f4ece1, #ddd1bb)',
        border: '1px solid #ddd1bb',
        fontFamily: "Helvetica, Arial, '微軟正黑體', sans-serif",
        '&:hover': {
            border: '1px solid #b52912',
            background: '#b52912',
            color: '#ddd1bb',
        },
    }
})(Button);

const taskBarStyles = () => ({
    taskbar: {
        padding: '10px',
        border: '1px solid #dfdfdf',
        backgroundColor: '#fff',
    },
    taskbar_fixed: {
        width: '100%',
        padding: '10px',
        border: '1px solid #dfdfdf',
        backgroundColor: '#fff',
        position: 'fixed',
        top: 0,
        zIndex: 30
    },
    marginbottom_12: {
        marginBottom: '12px'
    },
});

/* props {
        scrolledHeight 是否置頂的判斷變數
        buttons {
            name: 按鈕名稱 & 顯示文字
            onClick: onClick event handler
        }
    }
*/
class FeeTaskBar extends React.Component {

    static propTypes = {
        buttons: PropTypes.array,
        noFixed: PropTypes.bool,
    };

    static defaultProps = {
        style: {},
        className: '',
        buttons: [],
        buttonStatus: "",
        noFixed: false
    };

    state = {
        scrolledHeight: 0,
        changeHeight: 160
    };

    // 必須要加此段 , 不然會報錯 , 參考資料 : https://gist.github.com/koistya/934a4e452b61017ad611#gistcomment-2194590
    constructor(props) {
        super(props);
        this.handleWindowOnScroll = this.handleWindowOnScroll.bind(this);
    }

    /*
    Usage: 監聽視窗捲動事件
    Param: none
    As Callback: none
    */
    componentDidMount() {
        window.addEventListener('scroll', this.handleWindowOnScroll);
    };

    /*
    Usage: 移除視窗捲動事件
    Param: none
    As Callback: none
    */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleWindowOnScroll);
        window.onscroll = undefined;
    };

    /*
    Usage: 抓取頁面捲動高度，判斷是否要置頂
    Param: none
    As Callback: none
    */
    handleWindowOnScroll() {
        window.onscroll = () => {

            const h = window.pageYOffset;
            const {scrolledHeight, changeHeight} = this.state;

            if (scrolledHeight < changeHeight && h > changeHeight) {
                this.setState({scrolledHeight: h});
            }
            if (scrolledHeight > changeHeight && h < changeHeight) {
                this.setState({scrolledHeight: h});
            }
        }
    }

    getTaskBarClassName = (scrolledHeight, changeHeight, noFixed) => {

        const {classes} = this.props;

        if (noFixed) return classes.marginbottom_12 + " " + classes.taskbar + " " + this.props.className;
        else if (scrolledHeight > changeHeight) return classes.taskbar_fixed;
        else return classes.marginbottom_12 + " " + classes.taskbar + " " + this.props.className;
    };

    getBlockHeight = (scrolledHeight, changeHeight) => {

        const feeTaskBarElement = document.getElementById('feeTaskBar');
        const feeTaskBarHeight = (feeTaskBarElement && feeTaskBarElement.clientHeight) || 0;

        if (scrolledHeight < changeHeight) return 0;
        else return feeTaskBarHeight;
    };

    render() {

        const {scrolledHeight, changeHeight} = this.state;
        const hasFixed = !this.props.noFixed;

        // 卡一個塊空白 div , 以免在某些情況下會出現下拉問題
        return (
            <>
                {hasFixed && <div style={{height: this.getBlockHeight(scrolledHeight, changeHeight) + 'px'}}/>}
                <div
                    id='feeTaskBar'
                    style={this.props.style}
                    className={this.getTaskBarClassName(scrolledHeight, changeHeight, this.props.noFixed)}
                >
                    {this.props.buttons.map((button, index) => {

                        // 先確認 button 是 ReactElement 還是 ReactProps
                        if (React.isValidElement(button)) return React.cloneElement(button, {key: button.name + '-' + index});
                        else return (
                            <StyledToolbarButton
                                key={button.name + '-' + index}
                                onClick={button.onClick}
                                disabled={button.buttonStatus === "R"}
                                style={button.buttonStatus === "N" ? {display: "none"} : {}}
                            >
                                {button.name}
                            </StyledToolbarButton>
                        )
                    })}
                </div>
            </>

        )
    }
}

export default withStyles(taskBarStyles)(FeeTaskBar);
