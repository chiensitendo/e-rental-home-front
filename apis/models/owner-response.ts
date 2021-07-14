export interface OwnerResponse extends Response {
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: number;
    provinceId: number;
    address: string;
}