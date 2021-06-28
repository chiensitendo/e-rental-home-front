import styles from './default_button.module.scss';
import { Button } from 'antd';
import classnames from "classnames";

const DefaultButton = (props: Props) => {
    const {className, text, children, htmlType, type, onClick} = props;
    let ty = (type)? type: "full";
    let buttonType = htmlType ? htmlType: "button";
    return <div className = {classnames(className, styles.DefaultButton)}>
                <Button 
                    className = {classnames({[styles.primary]: ty === "full", [styles.outlinePrimary]: ty === "outline"})} 
                    type = {ty === "outline" ? "default": "primary"} 
                    size = "large"
                    htmlType = {buttonType}
                    onClick = {onClick && onClick}
                >{children ? children: text}</Button>
        </div>

}

export default DefaultButton;

type Props = {
    className?: any;
    text?: string;
    children?: any;
    type?: "outline" | "full";
    htmlType?: "button" | "submit" |  "reset";
    onClick?: () => void;
}