import * as React from "react";
import PropTypes from "prop-types";

// material component
import {Dialog, DialogTitle, DialogActions, DialogContent, IconButton, withStyles} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

// share component
import {StyledButtonCancel} from "component/material/StyledButton";

const popupStyles = () => ({
    listitem: {
        display: 'inline-flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    popup_title: {
        backgroundColor: '#f4ece1',
        background: '-webkit-linear-gradient(top, #f4ece1, #ddd1bb)',
        borderBottomColor: '#ddd1bb',
        paddingTop: '7px',
        paddingBottom: '7px',
    },
    popup_title_font: {
        fontWeight: '900',
        fontSize: '30px'
    },
    popup_functionarea: {
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'center'
    },
    close_icon: {
        position: 'absolute',
        right: '12px',
        top: '6px'
    },
});

const StyledDialog = withStyles({
    root: {
        background: 'rgba(0, 0, 0, 0.4)',
    },
    paper: {
        width: '70%',
        maxWidth: 'none',
        borderRadius: '5px',
    }
})(Dialog);

class FeeDialog extends React.PureComponent {

    static propTypes = {
        handleClose: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        buttons: PropTypes.array,
        filter: PropTypes.object // 將 filter 資訊放入其中
    };

    static defaultProps = {
        buttons: [],
    };

    state = {
        value: null,
    };

    render() {

        const {classes} = this.props;

        // 在 style 設定 zIndex , 讓 ComboBox 可在 Dialog 上面顯示

        /*

        disableEnforceFocus : 讓 kendo-ui datePicker 不會自動關起來
        參考資料 : https://www.telerik.com/forums/datepicker-closes-directly-when-used-in-material-ui-dialog#74FkZxAElEKx6vn6au285g

         */
        return (
            <StyledDialog
                disableEnforceFocus
                open={true}
                style={{
                    zIndex: 50,
                }}
            >
                <DialogTitle className={classes.popup_title}>
                    <span className={classes.popup_title_font}>{this.props.title}</span>
                    <IconButton className={classes.close_icon} onClick={this.props.handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {this.props.content}
                </DialogContent>
                <DialogActions>
                    <div className={classes.popup_functionarea}>
                        {
                            this.props.buttons.map((button) => {
                                return (
                                    <StyledButtonCancel
                                        key={button.name}
                                        onClick={button.onClick}
                                    >
                                        {button.name}
                                    </StyledButtonCancel>
                                );
                            })
                        }
                    </div>
                </DialogActions>
            </StyledDialog>
        );
    }
}

export default withStyles(popupStyles)(FeeDialog);
