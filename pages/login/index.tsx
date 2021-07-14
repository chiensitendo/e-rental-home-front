import style from "./login.module.scss";
import Head from "next/head";
import { Form, Input, Checkbox } from 'antd';
import DefaultButton from "@/cores/button/default_button";
import TextField from "@/cores/text-field/text-field";
import { createRules, openNotificationWithIcon } from "libs/ultility";
import { LocalStorageModel, RULE_TYPE } from "libs/types";
import {  NextRouter,useRouter } from "next/dist/client/router";
import { ownerLogin } from "apis/owner-api";
import { LoginResponse } from "apis/models/login-response";
import { LOCALSTORAGE_KEY } from "libs/const";
import { withLogin } from "auth/auth";

const Login = (props) => {

    const router: NextRouter= useRouter();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        ownerLogin({
            loginId: values.username,
            password: values.password
        }).then(res => {
            if (res && res.data){
                let data: LoginResponse = res.data as LoginResponse;
                const expireTimestamp = new Date().getTime() + data.expiredTime;
                let user: LocalStorageModel = {
                    id: data.id,
                    token: data.token,
                    tokenType: data.tokenType,
                    role: data.role,
                    expiredTime: expireTimestamp
                }
                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
                router.push("/home");
            }
            openNotificationWithIcon('success', "Đăng nhập thành công! ", "");
        }).catch((err) => {
            if (!err.code || !err.message){
                openNotificationWithIcon('error', "Lỗi hệ thống! ", "");
            } else {
                openNotificationWithIcon('error', err.message, "");
            }
            openNotificationWithIcon('error', "Đăng nhập thất bại! ", "");
        });
        
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
                                    label="Username hoặc Email"
                                    name="username"
                                    rules={createRules("username hoặc email", [RULE_TYPE.REQUIRED])}                                    
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

export default withLogin(Login);