import DefaultButton from "@/cores/button/default_button";
import ESelect from "@/cores/button/select/e-select";
import EModal from "@/cores/e-modal/e-modal";
import TextField from "@/cores/text-field/text-field";
import { Form, Input } from 'antd';
import { UpdateOwnerRequest } from "apis/models/update-owner-request";
import { updateOwnerInfo } from "apis/owner-api";
import { GENDERS, LOCALSTORAGE_KEY, PROVINCES } from "libs/const";
import { LocalStorageModel, RULE_TYPE } from "libs/types";
import { createRules, openNotificationWithIcon } from "libs/ultility";
import React from "react";
import style from "./update-owner-info.module.scss";

const UpdateOwnerInfo = (props: Props) => {
    const {isVisible, onCancel} = props;
    const [user, setUser] = React.useState<LocalStorageModel>(null);

    const onFinish = (values: any) => {
        console.log('Success:', values);
        let req: UpdateOwnerRequest = {
            address: values.address,
            firstName: values.firstname,
            gender: values.gender,
            lastName: values.lastname,
            provinceId: values.province,
            userName: values.username
        }
        updateOwnerInfo(user.id, req).then(res => {
            if (res && res.data && user){
                user.lastName = res.data.lastName;
                user.firstName = res.data.firstName;
                user.userName = req.userName;
                user.hasInfo = res.data.has_info;
                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
                onCancel && onCancel();
            }
            openNotificationWithIcon('success', "Cập nhật thành công! ", "");
        }).catch(err => {
            if (!err?.code || !err?.message){
                openNotificationWithIcon('error', "Lỗi hệ thống! ", "");
            } else {
                openNotificationWithIcon('error', err.message, "");
            }
            openNotificationWithIcon('error', "Cập nhật thất bại! ", "");
        })
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    React.useEffect(() => {
        let obj = localStorage.getItem(LOCALSTORAGE_KEY);
        if (obj){
            let user: LocalStorageModel = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            if (user){
                setUser(user);
            }
        }

    },[]);
    const titleComponent = <div className = {style.title}>
        <p>Xin vui cập nhật thông tin trước khi trải nghiệm dịch vụi nào!</p>
    </div>
    return <EModal
                isVisible = {isVisible} 
                footer = {null}
                onCancel = {null}
                title = {titleComponent}
            >
                <div>
                {user && <Form 
                        name="basic"
                        layout="vertical"
                        initialValues = {{
                            lastname: user.lastName,
                            firstname: user.firstName,
                            username: user.userName,
                            email: user.email
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <TextField 
                            label="Họ"
                            name="firstname"
                            rules={createRules("họ", [RULE_TYPE.REQUIRED])}                                    
                        ><Input /></TextField>
                        <TextField 
                            label="Tên"
                            name="lastname"
                            rules={createRules("tên", [RULE_TYPE.REQUIRED])}                                    
                        ><Input /></TextField>
                        <ESelect
                            label="Giới tính"
                            name="gender"
                            rules={createRules("giới tính", [RULE_TYPE.REQUIRED])}
                            items = {GENDERS}                                    
                        ></ESelect>
                        <ESelect
                            label="Tỉnh thành"
                            name="province"
                            rules={createRules("tỉnh thành", [RULE_TYPE.REQUIRED])}
                            items = {PROVINCES}                                    
                        ></ESelect>
                        <TextField 
                            label="Địa chỉ"
                            name="address"
                        ><Input /></TextField>                                
                        <TextField 
                            label="Username"
                            name="username"
                            rules={createRules("username", [RULE_TYPE.REQUIRED])}                                    
                        ><Input /></TextField>
                        <TextField 
                            label="Email"
                            name="email"
                            rules={createRules("email", [RULE_TYPE.REQUIRED, RULE_TYPE.EMAIL])}                                    
                        ><Input /></TextField>
                        <Form.Item>
                            <DefaultButton  className = {style.submitButton} htmlType = "submit">Cập nhật</DefaultButton>
                        </Form.Item>
                    </Form>}
                </div>
            </EModal>
}

type Props = {
    isVisible: boolean;
    onCancel?: () => void
}

export default UpdateOwnerInfo;

