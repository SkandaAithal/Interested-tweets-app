import { BaseEntity } from 'typeorm';
import { User } from '../../users/entities/user.entity';
export declare class Interest extends BaseEntity {
    id: string;
    interest: string;
    user: User;
}
