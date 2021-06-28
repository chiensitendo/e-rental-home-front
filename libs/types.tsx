export enum RULE_TYPE {
    REQUIRED = 1,
    PASSWORD = 2
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