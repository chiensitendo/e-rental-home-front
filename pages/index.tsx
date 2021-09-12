import  Head from "next/head";
import style from "./index.module.scss";
import DefaultButton from '@/cores/button/default_button';
import { NextRouter, useRouter } from "next/dist/client/router";

const IndexPage = (props) => {

    const router: NextRouter = useRouter();

    return <div className = {style.IndexPage}>
            <Head>
                <title>E-Rental Home</title>
            </Head>
            <div className = {style.titles}>
                <div className = {style.logo}>
                    <img src = "/images/logo.svg" alt = "E-Rental"/>
                </div>
                <div className = {style.menu}>
                    <DefaultButton className = {style.button} onClick = {() => {
                        router.push("/login");
                    }}>Đăng nhập</DefaultButton>
                </div>
            </div>
            <div className = {style.container}>
                <div className = {style.slogan}>
                    <h2>E-RENTAL</h2>
                    <p>Chào mừng bạn đến với E-RENTAL</p>
                </div>
                <div className = {style.imageContainer}>
                    <img src = "/images/phone.svg" alt = "E-Rental Phone"/>
                </div>
            </div>
    </div>
}

export default IndexPage;

