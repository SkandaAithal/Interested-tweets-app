import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { OauthService } from "../oauth.service";
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    private oauth;
    constructor(oauth: OauthService);
    validate(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback): Promise<{
        user: import("../../users/entities/user.entity").User;
        jwt: string;
    }>;
}
export {};
