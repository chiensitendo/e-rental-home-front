import { LOCALSTORAGE_KEY } from "libs/const";
import { LocalStorageModel } from "libs/types";
import { openNotificationWithIcon } from "libs/ultility";
import { NextRouter, useRouter } from "next/dist/client/router";
import React from "react"

export default function withAuth(WrappedComponent) {
    
    return () => {
        const router: NextRouter= useRouter();
        const [isAuth, setIsAuth] = React.useState(false);
        React.useEffect(() => {
            try {
                let obj = localStorage.getItem(LOCALSTORAGE_KEY);
                
                if (obj === null){
                    openNotificationWithIcon('error', "Vui lòng đăng nhập!", "");
                    setIsAuth(false);
                    router.push("/login");
                } else {
                    let user: LocalStorageModel = JSON.parse(obj);
                    const currentTimestamp = new Date().getTime();
                    if (currentTimestamp <= user.expiredTime) {
                        setIsAuth(true);
                    } else {
                        openNotificationWithIcon('error', "Token hết hạn!", "");
                        setIsAuth(false);
                        router.push("/login");
                    }
                }      
            } catch(e){
                router.push("/login");
            }
        },[]);
        return isAuth && <WrappedComponent />;
    }
}
