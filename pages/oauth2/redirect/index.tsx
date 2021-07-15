import { NextRouter, useRouter } from "next/router";
import React from "react";
import jwt_decode from "jwt-decode";
import { LocalStorageModel } from "libs/types";
import { LOCALSTORAGE_KEY } from "libs/const";

const Oauth2Redirect = (props) => {
    const router: NextRouter = useRouter();
    
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
                token: props.token
            }
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(user));
            router.push("/home");
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
