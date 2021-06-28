import style from "./text-field.module.scss";
import { Form } from 'antd';
import { Rule } from 'antd/lib/form';
import classNames from 'classnames';
const TextField = (props: Props) => {
    const {children, className, label, name, rules} = props;

    return <Form.Item 
                className = {classNames(className, style.TextField)}
                label = {label}
                name = {name}
                rules = {rules ? rules: []}
                >{children}</Form.Item>
}

export default TextField;

type Props = {
    label?: string;
    name?: string;
    children?: any;
    className?: string;
    rules?: Rule[];
}