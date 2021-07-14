import { BellOutlined } from "@ant-design/icons";
import style from "./layout.module.scss";

export default function Layout({ children }) {

    return <div className = {style.Layout}>
                <div className = {style.Header}>
                    <div className = {style.Logo}>
                        <div></div>
                        <div className = {style.logo}>
                            <img src = "/images/logo.svg" alt = "E-Rental"/>
                        </div>
                        <div>
                            <BellOutlined />
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
        </div>
  }