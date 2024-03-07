import { Profile, Strategy } from "passport-instagram";
import { OauthService } from "../oauth.service";
declare const InstagramStrategy_base: new (...args: any[]) => Strategy;
export declare class InstagramStrategy extends InstagramStrategy_base {
    private oauth;
    constructor(oauth: OauthService);
    validate(req: any, accessToken: string, refreshToken: string, profile: Profile, done: Function): Promise<void>;
}
export {};
