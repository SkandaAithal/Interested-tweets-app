import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { EntityManager, Repository } from "typeorm";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class UsersService {
    private userRepository;
    private jwtService;
    private readonly manager;
    constructor(userRepository: Repository<User>, jwtService: JwtService, manager: EntityManager);
    private hashPassword;
    register(createUserDto: CreateUserDto): Promise<string>;
    login(loginUserDto: LoginUserDto): Promise<{
        message: string;
        token: string;
    }>;
    generateJWT(user: User): Promise<string>;
    generateJWTTwitter(twitterid: string): Promise<string>;
    getUserById(id: number): Promise<User>;
}
