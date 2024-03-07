import { status } from 'src/status.enum';
import { BaseEntity } from 'typeorm';
import { Interest } from '../../interests/entities/interests.entity';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    socialid: string;
    status: status;
    interests: Interest[];
    createdAt: Date;
    updatedAt: Date;
}
