export interface OwnerInfoResponse extends Response {
    id: number;
    ownerId: number;
    userName: string;
    firstName: string;
    lastName: string;
    has_info: boolean;
    gender: boolean;
    provinceId: Number;
    address: string;
    email: string;
}