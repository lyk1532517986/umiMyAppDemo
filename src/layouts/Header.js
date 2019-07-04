import { Component } from 'react';
import { Layout,Button } from 'antd';
import { FormattedMessage,getLocale,setLocale } from 'umi/locale';

const { Header } = Layout;

class HeaderLayout extends Component {
    changLang() {
        const locale = getLocale();
        if (!locale || locale === 'zh-CN') {
            setLocale('en-US');
        } else {
            setLocale('zh-CN');
        }
    }

    render() {
        return (
            <>
                <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>
                    <Button
                        size="small"
                        onClick={() => {
                            this.changLang();
                        }}
                    >
                        <FormattedMessage id="lang" />
                    </Button>
                </Header>
            </>
        )
    }
}

export default HeaderLayout;