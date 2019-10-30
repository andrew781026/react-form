import React from "react";
import _ from "lodash";
import {SnackbarProvider} from "notistack";

const getOptionObj = (options, code, defaultShow) => {
    return (options.find(option => option.code === code) || {code, show: defaultShow});
};

const leftStr = (str, num) => str.substring(0, num);

const rightStr = (str, num) => str.substring(str.length - num, str.length);

const getCodeFieldName = (ObjFieldName) => ObjFieldName.substring(0, ObjFieldName.length - 3);

const getDataOriginPK = (propSingleData = {}) => {

    const newProps = Object.keys(propSingleData).reduce((previous, key) => {

        // 將帶有 former 開頭的 key , value 代到新的 object 中
        if (leftStr(key, 6) !== 'former') return previous;
        else {
            return {
                ...previous,
                [key]: propSingleData[key]
            };
        }

    }, {});

    return newProps;
};

const objIsEmpty = (obj) => {

    // for ... in , 參考資料 : https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in
    for (let prop in obj) {

        if (Boolean(obj[prop])) return false;
    }

    return true;
};

const objNotEmpty = (obj) => !objIsEmpty(obj);

// 捲動到目標位置 , 會多往上捲動 :headerOffset 距離
const smoothScrollTo = (elementId) => {

    setTimeout(() => {
        try {

            const element = document.getElementById(elementId);
            const headerOffset = 45;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

        } catch (e) {
            if (process.env.REACT_APP_DEBUG_MODE === "ON") { // .env.development 中 DEBUG_MODE 開啟時
                console.error(`when elementId = ${elementId}`, `smoothScrollTo has error=`, e);
            }
        }
    }, 200);
};

const getMessages = (fieldName, {warnMessages, errMessages, validateMessages}) => {

    return {
        warnMessage: warnMessages && warnMessages[fieldName],
        errMessage: errMessages && errMessages[fieldName],
        validateMessage: validateMessages && validateMessages[fieldName],
    };

};

const getValidationMessage = (fieldName, errMessages) => {

    const errMsg = errMessages && errMessages[fieldName];

    return {
        valid: !errMsg,
        validationMessage: errMsg,
    };

};

// 取得 from ~ to 的數字陣列
const getNumberArray = (from, to) => {
    let result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};

// 中文：/^[\u4E00-\u9FA5]+$/
const isChineseChar = (char) => 0x4E00 <= char && char <= 0x9FA5;

const getByteCount = (str) => {

    return [...str].reduce((pre, curr) => isChineseChar(curr) ? pre + 3 : pre + 1, 0);
};

const debounceMap = {};

// Define the method directly in your class
// 產生延遲一秒效果的 function
// 參考資料 : https://stackoverflow.com/questions/36294134/lodash-debounce-with-react-input
const getDebounceFunc = (taskId, fieldName, wait = 1000) => {

    const tempFunc = debounceMap[`${taskId}-${fieldName}`];

    if (tempFunc) {

        return tempFunc;

    } else {

        const newTempFunc = _.debounce(func => func(), wait);
        debounceMap[`${taskId}-${fieldName}`] = newTempFunc;
        return newTempFunc;
    }
};

const retrieveFormErrMsg = (err) => {

    const formErrMsg = err.msg ? err.msg : '無法連接到伺服器 , 請稍後再試 !';

    return formErrMsg;
};


const initMessages = ({data, messageChecker}) => {

    const keys = Object.keys(data);

    const warnMessages = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const warnDataObj = messageChecker && messageChecker({singleData: data, fieldName: key, value: data[key]});
        warnMessages[key] = warnDataObj && warnDataObj[key];
    }

    return warnMessages;
};

const getWarnDataMsg = ({fieldName, value, maxLength, chFieldName}) => {

    return (value && value.length >= maxLength) ? {[fieldName]: `提示 : ${chFieldName}至多可輸入${maxLength}個字`} : {[fieldName]: undefined};
};

const baseGetNewData = ({fieldName, value}) => {

    if (typeof fieldName === "object") {

        const {from, to} = fieldName;
        const {fromValue, toValue} = value;

        return {
            [`${from}Obj`]: fromValue,
            [from]: fromValue.code,
            [`${to}Obj`]: toValue,
            [to]: toValue.code,
        };

    } else if (rightStr(fieldName, 3) === 'Obj') {

        const codeFieldName = getCodeFieldName(fieldName);

        return {
            [codeFieldName]: value && value.code,
            [fieldName]: value,
        };

    } else if (rightStr(fieldName, 4).toLowerCase() === 'date') {

        return {
            [`${fieldName}Obj`]: value,
            [fieldName]: value && value.code
        };

    } else {

        return {
            [fieldName]: value
        };
    }
};

export {
    getOptionObj,
    getNumberArray,
    getCodeFieldName,
    getDataOriginPK,
    getDebounceFunc,
    getMessages,
    getValidationMessage,
    getByteCount,
    retrieveFormErrMsg,
    initMessages,
    isChineseChar,
    objIsEmpty,
    objNotEmpty,
    smoothScrollTo,
    rightStr,
    baseGetNewData,
    getWarnDataMsg,
    leftStr,
};
