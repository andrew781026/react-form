// react
import * as React from "react";

// share component
import {AlertBlock} from "component/alert/Alert";
import FeeAlertBlock from "view/FEE/common/FeeAlertBlock";
import {objNotEmpty} from "view/FEE/common/util/FeeTool";

class FormAlertBlock extends React.PureComponent {

    getAlertMessage = (alertMessage) => {

        if (!alertMessage) {

            return '操作失敗提示訊息';

        } else if (typeof alertMessage === 'object') {

            if (!(alertMessage.response)) {
                return '無法連接到伺服器 , 請稍後再試 ! ';
            }

            return alertMessage.msg;

        } else if (typeof alertMessage === 'string') {

            return alertMessage;
        }

    };

    render() {

        const {fieldMapper, alertMessage, alertOpen} = this.props;

        if (typeof this.props.alertMessage === 'object') {

            const newAlertOpen = alertOpen || objNotEmpty(alertMessage);

            return <FeeAlertBlock alertOpen={newAlertOpen} fieldMapper={fieldMapper} alertMessages={alertMessage}/>

        } else {

            const newAlertOpen = alertOpen || Boolean(alertMessage);

            return newAlertOpen ? (
                <AlertBlock alertMessage={this.getAlertMessage(this.props.alertMessage)}/>
            ) : '';
        }

    }
}


export default FormAlertBlock;
