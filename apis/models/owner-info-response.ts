export interface OwnerInfoResponse extends Response {
    id: number;
    ownerId: number;
    userName: string;
    firstName: string;
    lastName: string;
    has_info: boolean;
    gender: number;
    provinceId: number;
    address: string;
    email: string;
}