import { status } from 'src/status.enum';
import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    twitterid: string;
    status: status;
    createdAt: Date;
    updatedAt: Date;
}
