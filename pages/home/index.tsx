import { Col, Row } from "antd";
import React from "react";
import style from "./home.module.scss";

const Home = (props) => {
    return <div className={style.background}>
        <img className={style.backgroundCurve} src="/icons/home/home.svg"></img>
        <img className={style.logo} src="/icons/home/logo.svg"></img>
        <img className={style.cornerTopCenter} src="icons/home/corner-top-center.svg"></img>
        <img className={style.phone} src="icons/home/phone.svg"></img>

        <div className={style.menu}>
            <Row gutter={[16, 16]} className={style.menuRow}>
                <Col span={6}>
                <img className={style.logo} src="/icons/home/instagram.svg"></img>
                </Col>
                <Col span={6}>
                <img className={style.logo} src="/icons/home/twitter.svg"></img>
                </Col>
                <Col span={6}>
                <img className={style.logo} src="/icons/home/youtube.svg"></img>
                </Col>
                <Col span={6}>
                <img className={style.logo} src="/icons/home/facebook.svg"></img>
                </Col>
            </Row>
        </div>
        <div className={style.slogan}>
            <Row>
                <div className={style.topic1}>SENT, RENT, BUY</div>
            </Row>
            <Row>
                <div className={style.topic2}>YOUR HOUSE WITH US</div>
            </Row>
            <Row>
                <Col xs={2} lg={1} xl={1} xxl={1}><img src="icons/home/handshake.svg"></img></Col>
                <Col xs={22} lg={10} xl={10} xxl={12}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </Col>
            </Row>
            <Row>
                <Col xs={2} lg={1} xl={1} xxl={1}><img src="icons/home/home-icon.svg"></img></Col>
                <Col xs={22} lg={10} xl={10} xxl={12}>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
            </Row>
        </div>
        
        <img className={style.cornerBottomLeft} src="icons/home/corner-bottom-left.svg"></img>

    </div>;

}
export default Home;