import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React from "react";
import style from "./e-modal.module.scss";

const EModal = (props: Props) => {
    const {isVisible, footer, onCancel, children, title, className} = props;
    const [visible, setVisible] = React.useState(false);
    const handleCancel = () => {
        onCancel && onCancel();
    }
    React.useEffect(() => {
        setVisible(isVisible);
    },[isVisible]);
    return <Modal
                className = {className}
                visible={visible}
                title= {title}
                // onOk={this.handleOk}
                onCancel={handleCancel}
                footer={footer}
                >
                {children}
        </Modal>
}

export default EModal;

type Props = {
    className?: string;
    isVisible: boolean;
    footer: React.ReactNode;
    children?: any;
    title?: any;
    onCancel?: () => void
}