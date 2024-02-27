import { OauthService } from 'src/auth/oauth.service';
import AuthenticatedRequest from './authenticated-request.interface';
export declare class oAuthController {
    private readonly oauthService;
    constructor(oauthService: OauthService);
    twitterLogin(req: AuthenticatedRequest, res: Response): Promise<void>;
    twitterCallback(req: Request, res: Response): Promise<void>;
}
