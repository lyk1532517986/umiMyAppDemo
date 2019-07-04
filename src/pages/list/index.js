import React from 'react';
import { Table, Modal, Button, Form, Input } from 'antd';
import { connect } from 'dva';
import SampleChart from '../../components/SampleChart'

const FormItem = Form.Item;

function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
        statistic: state.cards.statistic,
    };
}

class List extends React.Component {
    state = {
        visible: false,
        statisticVisible: false,
        id: null,
    };
    columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '描述',
            dataIndex: 'desc',
        },
        {
            title: '链接',
            dataIndex: 'url',
            render(value) {
                return (
                    <a href={value}>{value}</a>
                );
            },
        },
        {
            title: '',
            dataIndex: 'statistic',
            render: (_, { id }) => {
                return (
                    <Button onClick={() => { this.showStatistic(id); }}>图表</Button>
                );
            },
        },
    ];

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };

    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;

        validateFields((err, values) => {
            if (!err) {
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                });
                // 重置 `visible` 属性为 false 以关闭对话框
                this.setState({ visible: false });
            }
        });
    };


    //图表展示逻辑 start
    showStatistic = (id) => {
        this.props.dispatch({
            type: 'cards/getStatistic',
            payload: id,
        });
        // 更新 state，弹出包含图表的对话框
        this.setState({ id, statisticVisible: true });
    };

    handleStatisticCancel = () => {
        this.setState({
            statisticVisible: false,
        });
    };
    //图表展示逻辑 end


    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }

    //监听组件更新事件，更新时重绘图表
    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.refreshChart();
        }
    }
    //监听卸载事件，组件卸载初始化的图标也应该随着组件一并销毁
    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    render() {
        const { visible , statisticVisible , id } = this.state;
        const { cardsList, cardsLoading ,form: { getFieldDecorator }, statistic } = this.props;

        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id" />
                <Button onClick={this.showModal}>新建</Button>
                <Modal
                    title="新建记录"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <FormItem label="名称">
                            {getFieldDecorator('name', {
                                rules: [{ required: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="描述">
                            {getFieldDecorator('desc')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="链接">
                            {getFieldDecorator('url', {
                                rules: [{ type: 'url' }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
                <Modal visible={statisticVisible} footer={null} onCancel={this.handleStatisticCancel}>
                    <SampleChart data={statistic[id]} />
                </Modal>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Form.create()(List));