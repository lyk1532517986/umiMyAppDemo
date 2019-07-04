import styles from './styles.less';
import { Button } from 'antd';

export default () => {
    return (
        <div className={styles.hello}>
            <p>
                <Button type="primary">ant 原始按钮</Button>
            </p>
            <p className={styles['override-ant-btn']}>
                <Button type="primary">加入圆角的按钮</Button>
            </p>
        </div>
    );
};