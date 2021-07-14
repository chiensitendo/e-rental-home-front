export enum RULE_TYPE {
    REQUIRED = 1,
    PASSWORD = 2,
    CHECKBOX_REQUIRED = 3,
    EMAIL = 4
}

export interface Choice {
    label: string;
    value: any;
    id: number;
}

export interface Province extends Choice {
    code?: string;
    slug?: string;
}

export type LocalStorageModel = {
    id: number;
    token: string;
    tokenType: string;
    role: string;
    expiredTime: number;
}