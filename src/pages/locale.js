/*import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, LocaleProvider } from 'antd';

export default () => {
    return (
        <LocaleProvider locale={zhCN}>
            <DatePicker />
        </LocaleProvider>
    )
}*/

// 上面实现方法为 antd 的国际化



import zhCN from 'antd/lib/locale-provider/zh_CN';
import { DatePicker, LocaleProvider } from 'antd';
import {
    FormattedMessage,
    IntlProvider,
    addLocaleData,
} from 'react-intl';
import zhData from 'react-intl/locale-data/zh';

const messages = {
    'helloworld': '你好',
};

addLocaleData(zhData);

export default () => {
    return (
        <IntlProvider locale="zh" messages={messages}>
            <LocaleProvider locale={zhCN}>
                <div>
                    <DatePicker />
                    <FormattedMessage id="helloworld" />
                </div>
            </LocaleProvider>
        </IntlProvider>
    )
}

// 上面实现为业务组件的国际化
