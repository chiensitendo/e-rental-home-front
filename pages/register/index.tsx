import style from "./register.module.scss";
import Head from "next/head";
import { Form, Input, Checkbox } from 'antd';
import DefaultButton from "@/cores/button/default_button";
import TextField from "@/cores/text-field/text-field";
import { RULE_TYPE } from "pages/libs/types";
import { createRules } from "pages/libs/ultility";
import {  NextRouter,useRouter } from "next/dist/client/router";
import ESelect from "@/cores/button/select/e-select";
import { GENDERS, PROVINCES } from "pages/libs/const";

const Register = (props) => {
    const router: NextRouter= useRouter();
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                                    label="Mật khẩu"
                                    name="password"
                                    rules={createRules("mật khẩu", [RULE_TYPE.REQUIRED, RULE_TYPE.PASSWORD])}                                 
                                ><Input.Password /></TextField>
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox className = "checkbox">Đồng ý với các điều khoản và dịch vụ</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <DefaultButton htmlType = "submit">Đăng nhập</DefaultButton>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
}

export default Register;