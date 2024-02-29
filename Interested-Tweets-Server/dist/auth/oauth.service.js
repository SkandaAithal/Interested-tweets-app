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
exports.OauthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let OauthService = class OauthService {
    constructor(userRepository, usersService) {
        this.userRepository = userRepository;
        this.usersService = usersService;
        this.JWT_SECRET_KEY = "LiftOffSecretKey2012";
    }
    async validateOAuthLogin(userProfile, provider) {
        try {
            const { twitterid, name } = userProfile;
            let existingUser = await this.userRepository.findOne({ where: { twitterid } });
            if (!existingUser) {
                existingUser = this.userRepository.create({
                    name,
                    twitterid,
                });
            }
            const jwt = await this.usersService.generateJWTTwitter(twitterid);
            return { jwt, user: existingUser };
        }
        catch (err) {
            throw new common_1.InternalServerErrorException("validateOAuthLogin", err.message);
        }
    }
};
exports.OauthService = OauthService;
exports.OauthService = OauthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], OauthService);
//# sourceMappingURL=oauth.service.js.map