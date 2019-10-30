import * as React from "react";
import {withStyles} from "@material-ui/core";

const styles = theme => ({

    alert_message: {
        color: 'white',
        backgroundColor: '#dd4b39',
        width: '100%',
        paddingTop: '12px',
        paddingBottom: '12px',
        marginBottom: '12px',
        borderColor: '#d73925',
        border: '1px solid transparent',
        borderRadius: '3px',
        textAlign: 'left'
    }
});

class FeeAlertBlock extends React.Component {

    getAlertMessage = (alertMessages) => {

        let result = [];

        if (typeof alertMessages === 'object') {

            for (let prop in alertMessages) {

                if (Boolean(alertMessages[prop])) {

                    // 如果有值 , 將其放入顯示文字中
                    result.push({
                        fieldName: prop,
                        value: alertMessages[prop]
                    });
                }
            }
        }

        return result;
    };

    render() {

        const {classes, alertOpen, alertMessages, fieldMapper, ...restProps} = this.props;

        return alertOpen ? (
            <div className={classes.alert_message}>
                <ul>
                    {this.getAlertMessage(alertMessages).map((item, index) => {

                        const fieldChName = fieldMapper && fieldMapper[item.fieldName];

                        return <li key={'li-' + index}>{`${fieldChName || item.fieldName}：${item.value}`}</li>
                    })}
                </ul>
            </div>
        ) : '';
    }
}

export default withStyles(styles)(FeeAlertBlock);
