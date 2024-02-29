"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterStrategy = void 0;
const oauth_service_1 = require("./oauth.service");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_twitter_1 = require("passport-twitter");
let TwitterStrategy = class TwitterStrategy extends (0, passport_1.PassportStrategy)(passport_twitter_1.Strategy, 'twitter') {
    constructor(oauth) {
        super({
            consumerKey: process.env.TWITTER_CONSUMER_KEY,
            consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
            callbackURL: "http://localhost:3001/auth/callbackUrl",
            passReqToCallback: true,
            profileFields: ["id", "displayName", "photos", "email"],
            scope: ["email"],
        });
        this.oauth = oauth;
    }
    async validate(req, accessToken, refreshToken, profile, done) {
        try {
            common_1.Logger.log(`Twitter UserProfile`, 'Auth');
            const jsonProfile = (profile && profile._json) || {};
            const userProfile = {
                userId: profile.id || jsonProfile.id,
                twitterid: profile.id || jsonProfile.id,
                name: profile.username || jsonProfile.username,
                email: (profile.emails && profile.emails[0].value) ||
                    (jsonProfile.emails && jsonProfile.emails[0].value),
                displayName: profile.displayName,
                picture: null,
            };
            const oauthResponse = await this.oauth.validateOAuthLogin(userProfile, 'twitter');
            return {
                user: oauthResponse.user,
                jwt: oauthResponse.jwt,
            };
        }
        catch (err) {
            done(err, false);
        }
    }
};
exports.TwitterStrategy = TwitterStrategy;
exports.TwitterStrategy = TwitterStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], TwitterStrategy);
//# sourceMappingURL=twitter.strategy.js.map