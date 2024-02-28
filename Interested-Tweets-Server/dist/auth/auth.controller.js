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
const twitter_guard_1 = require("../users/twitter-guard");
const oauth_service_1 = require("./oauth.service");
let oAuthController = class oAuthController {
    constructor(oauthService) {
        this.oauthService = oauthService;
    }
    async twitterLogin() { }
    async twitterCallback(req, res) {
    }
};
exports.oAuthController = oAuthController;
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.UseGuards)(twitter_guard_1.TwitterGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Redirects user to Twitter login page' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad request. Please check your input data.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "twitterLogin", null);
__decorate([
    (0, common_1.Get)('callbackUrl'),
    (0, common_1.UseGuards)(twitter_guard_1.TwitterGuard),
    (0, swagger_1.ApiOkResponse)({ description: 'Handles Twitter callback URL' }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Bad request. Please check your input data.',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Response]),
    __metadata("design:returntype", Promise)
], oAuthController.prototype, "twitterCallback", null);
exports.oAuthController = oAuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [oauth_service_1.OauthService])
], oAuthController);
//# sourceMappingURL=auth.controller.js.map