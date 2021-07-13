import { notification } from "antd";
import { Rule } from "antd/lib/form";
import { RULE_TYPE } from "./types";

export const createRules = (name: string, types: number[]): Rule[] => {
    let rules: Rule[] = [];
    if (types.includes(RULE_TYPE.REQUIRED)){
        rules.push({ required: true, message: `Xin hãy điền ${name} của bạn!` });
    } 
    if (types.includes(RULE_TYPE.PASSWORD)) {
        rules.push({pattern: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/), message: `Mật khẩu bao gồm ít nhất 8 ký tự, chữ thường, chữ in hoa và số.`})
    }
    return rules;
}

export const openNotificationWithIcon = (type, message, description) => {
    notification[type]({
      message: message,
      description:
      description,
    });
  };