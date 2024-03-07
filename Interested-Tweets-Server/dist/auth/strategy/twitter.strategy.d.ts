import { OauthService } from '../oauth.service';
import { VerifiedCallback } from 'passport-jwt';
import { Strategy } from 'passport-twitter';
declare const TwitterStrategy_base: new (...args: any[]) => Strategy;
export declare class TwitterStrategy extends TwitterStrategy_base {
    private oauth;
    constructor(oauth: OauthService);
    validate(req: any, accessToken: string, refreshToken: string, profile: any, done: VerifiedCallback): Promise<{
        user: import("../../users/entities/user.entity").User;
        jwt: string;
    }>;
}
export {};
