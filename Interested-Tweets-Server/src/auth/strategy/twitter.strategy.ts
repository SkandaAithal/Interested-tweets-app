import { OauthService } from '../oauth.service';
import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { VerifiedCallback } from 'passport-jwt';
import { Profile, Strategy } from 'passport-twitter';
// import { Strategy } from 'passport-twitter-oauth2';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(private oauth: OauthService) {
    super({
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3001/auth/callbackUrl",
      passReqToCallback: true,
      profileFields: ["id", "displayName", "photos", "email"],
      scope: ["email"],
    });
  }

  async validate(
    req: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifiedCallback
  ) {
    try {
    Logger.log(`Twitter UserProfile`, 'Auth');
    const jsonProfile = (profile && profile._json) || {};
    // console.log(profile);
    const userProfile = {
      userId: profile.id || jsonProfile.id,
      socialid: profile.id || jsonProfile.id,
      name: profile.username || jsonProfile.username,
      email:
        (profile.emails && profile.emails[0].value) ||
        (jsonProfile.emails && jsonProfile.emails[0].value),
      displayName: profile.displayName,
      picture: null,
    };
    console.log(accessToken)
    // console.log(userProfile);
    const oauthResponse = await this.oauth.validateTwitterOAuth(
      userProfile,
      'twitter',
    );
    // console.log(oauthResponse)
    // console.log({user: oauthResponse.user,
    //   jwt: oauthResponse.jwt})
    return{
        user: oauthResponse.user,
        jwt: oauthResponse.jwt,
      };
      // done(null, {
      //   user: oauthResponse.user,
      //   jwt: oauthResponse.jwt,
      // ...JSON.parse(JSON.stringify(oauthResponse.user)),
      // jwt: oauthResponse.jwt,
      // });
    } catch (err) {
      done(err, false);
    }
  }
}
