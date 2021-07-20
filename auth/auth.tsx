import UpdateOwnerInfo from "components/update-owner-info";
import { LOCALSTORAGE_KEY } from "libs/const";
import { LocalStorageModel } from "libs/types";
import { openNotificationWithIcon } from "libs/ultility";
import { NextRouter, useRouter } from "next/dist/client/router";
import React from "react"

export default function withAuth(WrappedComponent) {
    
    return () => {
        const router: NextRouter= useRouter();
        const [isAuth, setIsAuth] = React.useState(false);
        const [hasInfo, setHasInfo] = React.useState(false);
        React.useEffect(() => {
            try {
                let obj = localStorage.getItem(LOCALSTORAGE_KEY);
                
                if (obj === null){
                    openNotificationWithIcon('error', "Vui lòng đăng nhập!", "");
                    setIsAuth(false);
                    setHasInfo(false);
                    router.push("/login");
                } else {
                    let user: LocalStorageModel = JSON.parse(obj);
                    const currentTimestamp = new Date().getTime();
                    if (!user){
                        setHasInfo(false);
                    } else {
                        setHasInfo(user.hasInfo);
                    }
                    if (currentTimestamp <= user.expiredTime) {
                        setIsAuth(true);
                    } else {
                        openNotificationWithIcon('error', "Token hết hạn!", "");
                        localStorage.removeItem(LOCALSTORAGE_KEY);
                        setIsAuth(false);
                        router.push("/login");
                    }
                }      
            } catch(e){
                router.push("/login");
            }
        },[]);
        
        React.useEffect(() => {
            let obj = localStorage.getItem(LOCALSTORAGE_KEY);
            if (!obj){
                setHasInfo(false);
                return;
            }
            let user: LocalStorageModel = JSON.parse(obj);
            if (!user){
                setHasInfo(false);
                return;
            }
            setHasInfo(user.hasInfo);
        },[]);
        return isAuth && <>{!hasInfo &&<UpdateOwnerInfo isVisible = {!hasInfo} 
        onCancel = {() => {
            setHasInfo(true)}}
    />}<WrappedComponent /></>;
    }
}

export function withLogin(WrappedComponent) {
    
    return () => {
        const router: NextRouter= useRouter();
        const [isUnAuth, setIsUnAuth] = React.useState(false);
        React.useEffect(() => {
            try {
                let obj = localStorage.getItem(LOCALSTORAGE_KEY);
                
                if (obj === null){
                    setIsUnAuth(true);
                } else {
                    let user: LocalStorageModel = JSON.parse(obj);
                    const currentTimestamp = new Date().getTime();
                    if (currentTimestamp <= user.expiredTime) {
                        setIsUnAuth(false);
                        router.push("/home");
                    } else {
                        openNotificationWithIcon('error', "Token hết hạn!", "");
                        localStorage.removeItem(LOCALSTORAGE_KEY);
                        setIsUnAuth(true);
                    }
                }      
            } catch(e){
                setIsUnAuth(true);
            }
        },[]);
        return isUnAuth && <WrappedComponent />;
    }
}
