import { BellFilled, HomeOutlined, MailOutlined, MenuUnfoldOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Menu, Popover } from "antd";
import style from "./layout.module.scss";
import classNames from "classnames";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { NextRouter, useRouter } from "next/router";
import DefaultButton from "../button/default_button";
export default function Layout(props: Props) {
    const {children, isOverfollow} = props;
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const router: NextRouter = useRouter();
    const url = React.useMemo(() => {
        if (!router || !router.pathname){
            return "";
        }
        return router.pathname;
    },[router]);
    const showDrawer = (event) => {
        setShowMenu(true);
      };
    
    const onClose = () => {
        setShowMenu(false);
      };
    return <div className = {style.Layout} style = {{overflow: (!isOverfollow)?"hidden": "auto"}}>
                <div className = {style.Header}>
                    <div className = {style.Logo}>
                        <div className = {classNames("sp_block", style.spSpace)}></div>
                        <div className = {style.logo}>
                            <img src = "/images/logo.svg" alt = "E-Rental"/>
                        </div>
                        <div className = {style.Menu}>
                            <Badge count={1000} overflowCount={99}>
                                <BellFilled style={{ fontSize: '28px', color: '#009688'}} />
                            </Badge>
                            <MenuUnfoldOutlined className = "sp_inline" onClick = {showDrawer} style={{ fontSize: '28px', color: '#009688'}} />
                            
                            <Popover placement="bottomRight" title={"sdsd"} content={<div>
                                <Menu className = {style.MenuList}>
                                    <Menu.Item key="/owner/profile" icon={<HomeOutlined />} onClick = {() => {
                                            router.push("/owner/profile");
                                        }}>
                                            Profile
                                    </Menu.Item>
                                </Menu>
                                <br/>
                                <DefaultButton className = {style.logoutBtn}>Đăng xuất</DefaultButton>
                            </div>} trigger="click">
                                <UserOutlined className = "pc_inline" style={{ fontSize: '28px', color: '#009688'}} />
                            </Popover>
                        </div>
                    </div>
                </div>
                <Drawer
                        title="E Rental"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={showMenu}
                        getContainer={false}
                        className = {style.Drawer}
                        style={{ position: 'fixed' }}
                        >
                        <Menu className = {style.MenuList} mode = "inline" selectedKeys={[url]} defaultOpenKeys = {['sub2']}>
                            <Menu.Item key="/" icon={<HomeOutlined />} onClick = {() => {
                                    router.push("/");
                                    onClose();
                                }}>
                                    Phòng
                            </Menu.Item>
                            <Menu.Item key="/home" icon={<HomeOutlined />} onClick = {() => {
                                    router.push("/home");
                                    onClose();
                                }}>
                                    Home
                            </Menu.Item>                            
                            <SubMenu key="sub2" icon={<UserOutlined />} title="Tài khoản">
                                <Menu.Item key="/owner/profile" icon={<UserOutlined />} onClick = {() => {
                                    router.push("/owner/profile");
                                    onClose();
                                }}>
                                    Profile
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                        <DefaultButton className = {style.logoutBtn}>Đăng xuất</DefaultButton>
                    </Drawer>
                <div className = {style.Children}>

                    {children}
                </div>
        </div>
  }

  type Props = {
      isOverfollow?: boolean;
      children?: any;
  }