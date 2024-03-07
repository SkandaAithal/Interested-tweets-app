import { OauthService } from "src/auth/oauth.service";
import { Response, Request } from "express";
export declare class oAuthController {
    private readonly oauthService;
    constructor(oauthService: OauthService);
    twitterLogin(): Promise<void>;
    twitterCallback(req: Request, res: Response): Promise<void>;
    googleLogin(): Promise<void>;
    googleCallback(req: Request, res: Response): Promise<void>;
}
