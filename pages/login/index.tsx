import style from "./login.module.scss";
import Head from "next/head";
import { Form, Input, Checkbox } from 'antd';
import DefaultButton from "@/cores/button/default_button";
import TextField from "@/cores/text-field/text-field";
import { createRules } from "pages/libs/ultility";
import { RULE_TYPE } from "pages/libs/types";
import {  NextRouter,useRouter } from "next/dist/client/router";

const Login = (props) => {

    const router: NextRouter= useRouter();

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return <div className = {style.Login}>
              <Head>
                <title>E-Rental Home | Đăng nhập</title>
                <link rel="icon" href="/app_icon.png" />
              </Head>
              <div className = {style.wrapper}>
                    <div className = {style.container}>
                        <div className = {style.imageContainer}>
                            <img src = "/images/logo.png"/>
                        </div>
                        <div className = {style.forwardContainer}>
                             <p>Chưa có tài khoản?</p>
                            <DefaultButton type = "outline" onClick = {() => {router.push("/register")}}>Đăng ký</DefaultButton>
                        </div>
                        <div className = {style.formContainer}>
                            <Form 
                                name="basic"
                                layout="vertical"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
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
                                    <Checkbox>Ghi nhớ mật khẩu</Checkbox>
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

export default Login;