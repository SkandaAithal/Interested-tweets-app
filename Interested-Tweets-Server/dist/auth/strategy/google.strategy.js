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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_1 = require("@nestjs/passport");
const oauth_service_1 = require("../oauth.service");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, "google") {
    constructor(oauth) {
        super({
            clientID: process.env.Google_Client_ID,
            clientSecret: process.env.Google_Client_Secret,
            callbackURL: "http://localhost:3001/auth/GoogleCallBack",
            scope: ["email", "profile", "https://www.googleapis.com/auth/youtube",
                "https://www.googleapis.com/auth/youtube.force-ssl"],
        });
        this.oauth = oauth;
    }
    async validate(accessToken, refreshToken, profile, done) {
        try {
            common_1.Logger.log(`Google UserProfile`, 'Auth');
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
        }
        catch (err) {
            done(err, false);
        }
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map