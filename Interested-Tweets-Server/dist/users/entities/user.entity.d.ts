import { BaseEntity } from 'typeorm';
import { Interest } from '../../interests/entities/interests.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    socialid: string;
    interests: Interest[];
    createdAt: Date;
    updatedAt: Date;
}
