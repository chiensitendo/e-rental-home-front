export interface LoginResponse extends Response {
    id: number;
    token: string;
    tokenType: string;
    role: string;
    expiredTime: number;
    userName: string;
    firstName: string;
    lastName: string;
    hasInfo: boolean;
    email: string;
}