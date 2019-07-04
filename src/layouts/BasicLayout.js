import { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header'
import Sider from './Sider'
import Footer from './Footer'

const { Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider />
                <Layout >
                    <Header />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;