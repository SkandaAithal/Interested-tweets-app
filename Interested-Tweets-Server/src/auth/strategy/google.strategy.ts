import { Inject, Injectable, Logger } from "@nestjs/common";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { OauthService } from "../oauth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(private oauth: OauthService) {
    super({
      clientID: process.env.Google_Client_ID,
      clientSecret: process.env.Google_Client_Secret,
      callbackURL: "http://localhost:3001/auth/GoogleCallBack",
      scope: ["email", "profile","https://www.googleapis.com/auth/youtube",
      "https://www.googleapis.com/auth/youtube.force-ssl"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback
  ) {
    try {
      // console.log(accessToken)
      Logger.log(`Google UserProfile`, 'Auth');

      const userProfile = {
        googleid: profile.id,
        name: profile.displayName,
        email: profile.emails ? profile.emails[0].value : null,
        picture: profile.photos ? profile.photos[0].value : null,
      };

      const oauthResponse = await this.oauth.validateGoogleOAuth(userProfile, 'google');
      return {
        user: oauthResponse.user,
        jwt: oauthResponse.jwt,
      };
    } catch (err) {
      done(err, false);
    }
  }
}
