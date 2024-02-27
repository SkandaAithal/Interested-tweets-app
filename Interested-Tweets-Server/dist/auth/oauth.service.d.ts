import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { UsersService } from "src/users/users.service";
export declare class OauthService {
    private userRepository;
    private readonly usersService;
    constructor(userRepository: Repository<User>, usersService: UsersService);
    validateOAuthLogin(profile: any): Promise<string | User>;
    createOAuthUser(profile: any): Promise<User>;
}
