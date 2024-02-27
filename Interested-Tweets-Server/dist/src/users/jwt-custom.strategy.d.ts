import { Strategy } from 'passport-jwt';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
declare const JwtCustomStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtCustomStrategy extends JwtCustomStrategy_base {
    private userRepo;
    constructor(userRepo: Repository<User>);
    validate(payload: {
        username: string;
    }): Promise<User>;
}
export {};
