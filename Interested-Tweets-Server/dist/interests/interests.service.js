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
exports.InterestsService = void 0;
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const interests_entity_1 = require("./entities/interests.entity");
const typeorm_1 = require("typeorm");
let InterestsService = class InterestsService {
    constructor(manager, usersService) {
        this.manager = manager;
        this.usersService = usersService;
    }
    async createInterest(interestData) {
        const user = await this.usersService.getUserById(interestData.userid);
        const newInterestData = { interest: interestData.interest };
        const newInterest = await this.manager.save(interests_entity_1.Interest, newInterestData);
        user.interests = [...user.interests, newInterest];
        await user.save();
        return newInterest;
    }
};
exports.InterestsService = InterestsService;
exports.InterestsService = InterestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        users_service_1.UsersService])
], InterestsService);
//# sourceMappingURL=interests.service.js.map