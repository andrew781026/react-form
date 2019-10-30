import React from 'react';


const Style = {

    "title": {
        "padding": "0px 24px 0px 12px",
        "fontSize": "1.2rem",
        "color": "rgb(181, 41, 18)",
        "borderLeft": "3px #b52912 solid",
        "marginBottom": "10px",
        "marginTop": "10px",
        "fontWeight": "bold"
    },
    "popuptitle": {
        "fontSize": "1.2rem",
        "background": "-webkit-linear-gradient(top, #f4ece1, #ddd1bb)",
        "backgroundColor": "#f4ece1",
        "borderBottomColor": "#ddd1bb",
        "width": "100%",
        "padding": "10px",
        "fontWeight": "bold"
    }
};


export const Title = (props) => {
    return (
        <div className={Style.title}>
            {props.title}
        </div>
    );
};

export const PopupTitle = (props) => {
    return (
        <div className={Style.popuptitle}>
            {props.title}
        </div>
    );
};

