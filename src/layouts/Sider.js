import { Component } from 'react';
import { Layout } from 'antd';
import Menu from './Menu'

const { Sider } = Layout;

class SiderLayout extends Component {
    render() {
        return (
            <>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <Menu />
                </Sider>
            </>
        )
    }
}

export default SiderLayout;