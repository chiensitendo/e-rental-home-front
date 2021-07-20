import style from "./register.module.scss";
import Head from "next/head";
import { Form, Input, Checkbox } from 'antd';
import DefaultButton from "@/cores/button/default_button";
import TextField from "@/cores/text-field/text-field";
import { RULE_TYPE } from "libs/types";
import { createRules, openNotificationWithIcon } from "libs/ultility";
import {  NextRouter,useRouter } from "next/dist/client/router";
import ESelect from "@/cores/button/select/e-select";
import { GENDERS, PROVINCES } from "libs/const";
import { ownerRegister } from "apis/owner-api";
import { SignUpRequest } from "apis/models/signup-request";

const Register = (props) => {
    const router: NextRouter= useRouter();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        let req: SignUpRequest = {
            email: values.email,
            username: values.username,
            address: values.address,
            firstName: values.firstname,
            gender: values.gender,
            lastName: values.lastname,
            password: values.password,
            provinceId: values.province
        }
        ownerRegister(req).then((res) => {
            router.push("/login");
            openNotificationWithIcon('success', "Đăng ký thành công! ", "");
        }).catch(err => {
            if (!err.code || !err.message){
                openNotificationWithIcon('error', "Lỗi hệ thống! ", "");
            } else {
                openNotificationWithIcon('error', err.message, "");
            }
            openNotificationWithIcon('error', "Đăng ký thất bại! ", "");
        });
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className = {style.Register}>
                <Head>
                    <title>E-Rental Home | Đăng ký</title>
                    <link rel="icon" href="/app_icon.png" />
                </Head>
                <div className = {style.wrapper}>
                    <div className = {style.container}>
                        <div className = {style.imageContainer}>
                            <img src = "/images/logo.png"/>
                        </div>
                        <div className = {style.forwardContainer}>
                             <p>Đẫ có tài khoản?</p>
                            <DefaultButton type = "outline" onClick = {() => {router.push("/login")}}>Đăng nhập</DefaultButton>
                        </div>
                        <div className = {style.formContainer}>
                            <Form 
                                name="basic"
                                layout="vertical"
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
                                <TextField 
                                    label="Mật khẩu"
                                    name="password"
                                    rules={createRules("mật khẩu", [RULE_TYPE.REQUIRED, RULE_TYPE.PASSWORD])}                                 
                                ><Input.Password /></TextField>
                                <Form.Item name="remember" valuePropName="checked" rules={createRules("Đồng ý với các điều khoản và dịch vụ", [RULE_TYPE.CHECKBOX_REQUIRED])} >
                                    <Checkbox className = "checkbox">Đồng ý với các điều khoản và dịch vụ</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <DefaultButton  className = {style.submitButton} htmlType = "submit">Đăng nhập</DefaultButton>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
}

export default Register;