import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
export declare class OauthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validateOAuthLogin(profile: any): Promise<User | "Welcome Back">;
    createOAuthUser(profile: any): Promise<User>;
}
