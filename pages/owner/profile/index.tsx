import DefaultButton from "@/cores/button/default_button";
import ESelect from "@/cores/button/select/e-select";
import Layout from "@/cores/layout/layout";
import TextField from "@/cores/text-field/text-field";
import { CloseOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { Card, Form, Input } from "antd";
import { UpdateOwnerRequest } from "apis/models/update-owner-request";
import { getOwnerById, updateOwnerInfo } from "apis/owner-api";
import withAuth from "auth/auth";
import { GENDERS, LOCALSTORAGE_KEY, PROVINCES } from "libs/const";
import { LocalStorageModel, RULE_TYPE } from "libs/types";
import { createRules, openNotificationWithIcon } from "libs/ultility";
import React from "react";
import style from "./profile.module.scss";

const OwnerProfile = () => {

    const [isBasicEdit, setIsBasicEdit]= React.useState(false);

    const [isAccountEdit, setIsAccountEdit]= React.useState(false);

    const [user, setUser] = React.useState<LocalStorageModel>(null);

    const [info, setInfo] = React.useState<UpdateOwnerRequest>(null);

    const basicButton = React.useRef(null);

    const onBasicFinish = (values: any) => {
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
                user.hasInfo = res.data.has_info;
                localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
                setIsBasicEdit(false);
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

    const onBasicFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onAccountFinish = (values: any) => {
        console.log('Success:', values);
    }

    const onAccountFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const openEditBasic = () => {
        setIsBasicEdit(true);
    }

    const closeEditBasic = () => {
        setIsBasicEdit(false);
    }

    const getInfo = async (id: number) => {
        await getOwnerById(id).then(res => {
            if (res && res.data){
                setInfo({
                    address: res.data.address,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    gender: res.data.gender,
                    provinceId: res.data.provinceId,
                    userName: res.data.userName
                })
            }
        }).catch(err => {
            if (!err.code || !err.message){
                openNotificationWithIcon('error', "Lỗi hệ thống! ", "");
            } else {
                openNotificationWithIcon('error', err.message, "");
            }
            openNotificationWithIcon('error', "Lấy dữ liệu thất bại! ", "");
        })
    }

    React.useEffect(() => {
        let obj = localStorage.getItem(LOCALSTORAGE_KEY);
        if (obj){
            let user: LocalStorageModel = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            if (user){
                setUser(user);
                getInfo(user.id);
            }
        }
    },[]);

    const handleOnInputChange = (field: string) => (event: any) => {
        console.log(event.target.value);
        let obj = info;
        obj[field] = event.target.value;
        setInfo(Object.assign({}, obj));
    }

    return <Layout isOverfollow = {true}>
        <div className = {style.OwnerProfile}>
            <div>
                <div>{info && <h2>Xin chào <span className = "highlight_text">{`${info.firstName} ${info.lastName}`}</span>!</h2>}</div>
                <Card title="Thông tin cơ bản" className = {style.Card} 
                extra = {!isBasicEdit ? <DefaultButton onClick = {openEditBasic} icon = {<EditOutlined  />}/> : 
                <div className = {style.EditButtonGroup}>
                    <DefaultButton onClick = {() => {
                        basicButton.current.click();
                    }} icon = {<SaveOutlined />}/>
                    <DefaultButton onClick = {closeEditBasic}  color = "secondary" icon = {<CloseOutlined />}/>
                </div>} >
                    {info && <Form 
                                name="basic"
                                layout="vertical"
                                onFinish={onBasicFinish}
                                onFinishFailed={onBasicFinishFailed}
                                initialValues = {{
                                    firstname: info.firstName,
                                    lastname: info.lastName,
                                    gender: info.gender,
                                    province: info.provinceId,
                                    address: info.address
                                }} 
                    >
                        <TextField 
                                label="Họ"
                                name="firstname"
                                rules={createRules("họ", [RULE_TYPE.REQUIRED])}
                                                                    
                        ><Input disabled = {!isBasicEdit} onChange = {handleOnInputChange('firstName')}/>
                        </TextField>
                        <TextField 
                                label="Tên"
                                name="lastname"
                                rules={createRules("tên", [RULE_TYPE.REQUIRED])}                                    
                        ><Input disabled = {!isBasicEdit} onChange = {handleOnInputChange('lastName')} /></TextField>
                        <ESelect
                                label="Giới tính"
                                name="gender"
                                rules={createRules("giới tính", [RULE_TYPE.REQUIRED])}
                                items = {GENDERS}
                                disabled = {!isBasicEdit}                                    
                        ></ESelect>
                        <ESelect
                                label="Tỉnh thành"
                                name="province"
                                rules={createRules("tỉnh thành", [RULE_TYPE.REQUIRED])}
                                items = {PROVINCES}
                                disabled = {!isBasicEdit}                                    
                        ></ESelect>
                        <TextField 
                                label="Địa chỉ"
                                name="address"
                        ><Input disabled = {!isBasicEdit} /></TextField>
                        <Form.Item hidden>
                            <DefaultButton reference = {basicButton} htmlType = "submit"></DefaultButton>
                        </Form.Item>                                
                    </Form>}                   
                </Card>
                <Card title="Thông tin tài khoản" className = {style.Card} >
                    {user && <Form 
                                name="account"
                                layout="vertical"
                                onFinish={onAccountFinish}
                                onFinishFailed={onAccountFinishFailed}
                                initialValues = {{
                                    username: user.userName,
                                    email: user.email,
                                    password: "******"
                                }}
                    >                               
                        <TextField 
                                label="Username"
                                name="username"
                                rules={createRules("username", [RULE_TYPE.REQUIRED])}                                    
                        ><Input disabled = {!isAccountEdit} /></TextField>
                        <TextField 
                                label="Email"
                                name="email"
                                rules={createRules("email", [RULE_TYPE.REQUIRED, RULE_TYPE.EMAIL])}                                    
                        ><Input disabled = {true}/></TextField>
                        <TextField 
                                label="Mật khẩu"
                                name="password"
                                rules={createRules("mật khẩu", [RULE_TYPE.REQUIRED, RULE_TYPE.PASSWORD])}                                 
                        ><Input.Password disabled = {!isAccountEdit} /></TextField>
                    </Form>}                    
                </Card>
            </div>
        </div>
    </Layout>
}

export default withAuth(OwnerProfile);