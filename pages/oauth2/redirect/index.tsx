import { NextRouter, useRouter } from "next/router";
import React from "react";
import jwt_decode from "jwt-decode";
import { LocalStorageModel } from "libs/types";
import { LOCALSTORAGE_KEY } from "libs/const";
import { getOwnerById } from "apis/owner-api";

const Oauth2Redirect = (props) => {
    const router: NextRouter = useRouter();
    const getOwnerInfo = async (id: number, user: LocalStorageModel) => {
        try {
            let res = await getOwnerById(id);
            if (!res || !res.data){
                router.push("/login");
                localStorage.removeItem(LOCALSTORAGE_KEY);
                return;
            }
            user.firstName = res.data.firstName;
            user.lastName = res.data.lastName;
            user.hasInfo = res.data.has_info;
            user.email = !res.data.email ? user.userName: res.data.email;
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
            router.push("/home");
        } catch(err){
            localStorage.removeItem(LOCALSTORAGE_KEY);
            router.push("/login");
        }

    }
    React.useEffect(() => {
        var decoded: any = jwt_decode(props.token);
        let roles: Array<any> = decoded.role;
        if (!props?.token || !roles || !roles[0] || !roles[0].authority || !decoded.tokenType ){
            router.push("/login");
        } else {
            const expireTimestamp = new Date().getTime() + +decoded.exp;
            let user: LocalStorageModel = {
                tokenType: decoded.tokenType + " ",
                id: +decoded.id,
                role: roles[0].authority,
                expiredTime: expireTimestamp,
                token: props.token,
                firstName: "",
                lastName: "",
                hasInfo: props.has_info,
                userName: decoded.username,
                email: ""
            }
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
            getOwnerInfo(user.id,user);
        }
    },[]);

    return "";
}
 
Oauth2Redirect.getInitialProps = async ({ query }) => {
    const { token } = query
  
    return {
    token
    }
  
  }

export default Oauth2Redirect;
