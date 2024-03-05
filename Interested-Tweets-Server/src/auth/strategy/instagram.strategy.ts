import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
// import { Profile, Strategy } from 'passport-instagram';
import { Profile, Strategy } from "passport-instagram";
import { OauthService } from "../oauth.service";

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, "instagram") {
  constructor(private oauth: OauthService) {
    super({
      clientID: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/Instacallback",
      passReqToCallback: true,
    });
  }

  async validate(
    req: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function
  ) {
    try {
      Logger.log(`Instagram UserProfile`, "Auth");
      console.log(accessToken)
      console.log(refreshToken)
        console.log(profile)
      // Adjust profile parsing according to Instagram's profile structure
      const userProfile = {
        userId: profile.id,
        instagramId: profile.id,
        username: profile.username,
        displayName: profile.displayName,
        // Adjust other profile fields as per Instagram's data structure
      };
        console.log(userProfile)
    //   const oauthResponse = await this.oauth.validateOAuthLogin(
    //     userProfile,
    //     "instagram"
    //   );

    //   return {
    //     user: oauthResponse.user,
    //     jwt: oauthResponse.jwt,
    //   };
    } catch (err) {
      done(err, false);
    }
  }
}
