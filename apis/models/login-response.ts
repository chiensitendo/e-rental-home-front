export interface LoginResponse extends Response {
    id: number;
    token: string;
    tokenType: string;
    role: string;
    expiredTime: number;
}