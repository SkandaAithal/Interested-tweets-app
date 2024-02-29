import { UsersService } from 'src/users/users.service';
import { OauthService } from './oauth.service';
import { VerifiedCallback } from 'passport-jwt';
import { Strategy } from 'passport-twitter';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
declare const TwitterStrategy_base: new (...args: any[]) => Strategy;
export declare class TwitterStrategy extends TwitterStrategy_base {
    private oauth;
    private userRepository;
    private usersService;
    constructor(oauth: OauthService, userRepository: Repository<User>, usersService: UsersService);
    validate(req: any, accessToken: string, refreshToken: string, profile: any, done: VerifiedCallback): Promise<{
        user: User;
        jwt: string;
    }>;
}
export {};
