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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const twitter_guard_1 = require("./guards/twitter-guard");
const oauth_service_1 = require("./oauth.service");
const google_guard_1 = require("./guards/google-guard");
let oAuthController = class oAuthController {
    constructor(oauthService) {
        this.oauthService = oauthService;
    }
    async twitterLogin() { }
    async twitterCallback(req, res) {
        try {
            const { user, jwt } = req.user;
            res.cookie("jwtToken", jwt);
            res.redirect("http://localhost:3000");
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
    async googleLogin() { }
    async googleCallback(req, res) {
        try {
            const { user, jwt } = req.user;
            res.cookie("jwtToken", jwt);
            res.redirect("http://localhost:3000");
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
};
exports.oAuthController = oAuthController;
__decorate([
    (0, common_1.Get)("login"),
    (0, common_1.UseGuards)(twitter_guard_1.TwitterGuard),
    (0, swagger_1.ApiOkResponse)({ description: "Redirects user to Twitter login page" }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Bad request. Please check your input data.",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "twitterLogin", null);
__decorate([
    (0, common_1.Get)("callbackUrl"),
    (0, common_1.UseGuards)(twitter_guard_1.TwitterGuard),
    (0, swagger_1.ApiOkResponse)({ description: "Handles Twitter callback URL" }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: "Bad request. Please check your input data.",
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "twitterCallback", null);
__decorate([
    (0, common_1.Get)("GoogleLogin"),
    (0, common_1.UseGuards)(google_guard_1.GoogleGuard),
    (0, swagger_1.ApiOkResponse)({ description: "Redirects user to Google login page" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad request. Please check your input data." }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "googleLogin", null);
__decorate([
    (0, common_1.Get)("GoogleCallBack"),
    (0, common_1.UseGuards)(google_guard_1.GoogleGuard),
    (0, swagger_1.ApiOkResponse)({ description: "Handles Google callback URL" }),
    (0, swagger_1.ApiBadRequestResponse)({ description: "Bad request. Please check your input data." }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "googleCallback", null);
exports.oAuthController = oAuthController = __decorate([
    (0, swagger_1.ApiTags)("auth"),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], oAuthController);
//# sourceMappingURL=auth.controller.js.map