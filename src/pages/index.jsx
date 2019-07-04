/* index.jsx */
import myStyles from './styles.css';

//基本思路的国际化  具体别的方法实现可见 src/pages/locale.js
/*const lang = window.navigator.language;

export default () => {
    const helloworld = lang === 'en-US' ? 'hello world' : '你好';
    return (
        <div className={myStyles.hello}>{helloworld}</div>
    );
}*/

// 在 umi 中使用方法
/*
*
* 在config/config.js中umi-plugin-react 的配置
* locale: {
*    enable: true,
* },
*
* */
// import React from 'react';
import {
    FormattedMessage,
    formatMessage
} from 'umi/locale';

//JS 逻辑中拿到相关文案 暂时有点问题
/*console.log(formatMessage(
    {
        id: 'helloworld',
    },
));*/

export default () => {
    return (
        <div className={myStyles.hello}><FormattedMessage id="helloworld" /></div>
    );
}

