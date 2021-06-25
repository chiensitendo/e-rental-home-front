import styles from './default_button.module.scss';
import { Button } from 'antd';
import classnames from "classnames";

const DefaultButton = (props: Props) => {
    console.log(props);
    const {className, text, children} = props;
    return <div className = {classnames(className, styles.DefaultButton)}>
                <Button className = {styles.primary} type = "primary" size = "large">{children ? children: text}</Button>
        </div>

}

export default DefaultButton;

type Props = {
    className?: any;
    text?: string;
    children?: any;
}