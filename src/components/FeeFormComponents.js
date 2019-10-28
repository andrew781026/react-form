// react
import React from 'react';

const style = {
    wordWrap: {
        wordWrap: 'break-word',
        marginTop: '5px',
        marginBottom: '5px',
    },
    commentFont: {
        wordWrap: 'break-word',
        color: '#0202ff',
    },
};

// WordWrapP 可能需要改成 String 顯示的原件 , 分不同類型 ( 一般 . 代碼轉中文 . 文字轉日期 . 文字轉金額 )
const WordWrapP = (props) => (<p style={{...style.wordWrap, ...props.style}}>{props.children || ''}</p>);

const CommentFont = (props) => (<div style={style.commentFont}>{props.children || ''}</div>);

export {WordWrapP, CommentFont};
