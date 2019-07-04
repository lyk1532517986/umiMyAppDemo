import { Component } from 'react';
import { Menu, Icon } from 'antd';

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class MenuLayout extends Component {
    render() {
        return (
            <>
                <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Helloworld</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                    >
                        <Menu.Item key="2">分析页</Menu.Item>
                        <Menu.Item key="3">监控页</Menu.Item>
                        <Menu.Item key="4">工作台</Menu.Item>
                    </SubMenu>
                </Menu>
            </>
        )
    }
}

export default MenuLayout;