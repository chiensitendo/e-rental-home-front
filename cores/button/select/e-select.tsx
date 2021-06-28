import { Rule } from "rc-field-form/lib/interface";
import style from "./e-select.module.scss";
import { Form, Select } from 'antd';
import classNames from 'classnames';
import { Choice } from "pages/libs/types";

const ESelect = (props: Props) => {
    const {className, label, name, rules, placeholder, items} = props;
    let list = items ? items: [];
    return <Form.Item 
    className = {classNames(className, style.ESelect)}
    label = {label}
    name = {name}
    rules = {rules ? rules: []}
    >
        <Select placeholder = {placeholder} allowClear >
                {list.map(item => {
                    return <Select.Option key = {item.id + "-" + item.value} value = {item.value}>{item.label}</Select.Option>
                })}
        </Select>
    </Form.Item>
}

export default ESelect;

type Props = {
    label?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    rules?: Rule[];
    items?: Choice[];
}