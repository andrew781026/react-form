// react
import React from "react";

// shared component
import {PopupTitle} from "../form/Title";
// material component
import {withStyles, Popover, Button, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const Style = {
    "function_button_area": {
        "width": "100%",
        "marginTop": "12px",
        "display": "inline-flex",
        "justifyContent": "center"
    },
    "listitem": {"display": "inline-flex", "width": "100%", "alignItems": "center", "justifyContent": "flex-start"},
    "popup_content": {"padding": "24px"},
    "text": {"fontWeight": "300"}
};

const StyledPopover = withStyles({
    paper: {
        width: "300px",
        maxWidth: "none"
    }
})(Popover);

const StyledConfirmButton = withStyles({
    root: {
        fontSize: "14px",
        width: "64px",
        background: "-webkit-linear-gradient(top, #f4ece1, #ddd1bb)",
        border: "1px solid #ddd1bb",
        "&:hover": {
            border: "1px solid #b52912",
            background: "#b52912",
            color: "#ddd1bb"
        }
    }
})(Button);

const StyledCancelButton = withStyles({
    root: {
        fontSize: "14px",
        width: "64px",
        backgroundColor: "#fff",
        color: "#444",
        border: "1px solid transparent",
        borderColor: "#ccc",
        borderRadius: "3px",
        "&:hover": {
            border: "1px solid gray",
            background: "white"
        }
    }
})(Button);

const PopupEditTitle = props => {
    return (
        <div className={Style.listitem}>
            <PopupTitle title="提示訊息"/>
            <IconButton style={{position: "absolute", right: "12px", top: "0px"}} onClick={props.handleOpenChange}>
                <CloseIcon/>
            </IconButton>
        </div>
    );
};

/*
    Usage: Get State from Redux
    Store:
    Process:
*/
const DeleteConfirm = props => {
    return (
        <StyledPopover
            open={true}
            style={{
                zIndex: 100,
                background: "rgba(0, 0, 0, 0.4)"
            }}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }}
            transformOrigin={{
                vertical: "center",
                horizontal: "center"
            }}
        >
            <PopupEditTitle handleOpenChange={props.handleOpenChange}/>

            <div className={Style.popup_content}>
                <p className={Style.text}>是否確認刪除</p>

                <div className={Style.function_button_area}>
                    <StyledConfirmButton onClick={props.handleConfirmClick}>確認</StyledConfirmButton>
                    <div style={{width: "15px"}}/>
                    <StyledCancelButton onClick={props.handleOpenChange}>取消</StyledCancelButton>
                </div>
            </div>
        </StyledPopover>
    );
};

export default DeleteConfirm;
