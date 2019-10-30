// react
import React from 'react';

const Style = {
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
        textAlign: 'center',
    }
};

export const AlertBlock = (props) => {
    return (
        <div className={Style.alert_message}>
            {props.alertMessage}
        </div>
    )
};
