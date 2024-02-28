import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    private hashPassword;
    register(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        success: boolean;
        message: string;
        token: string;
    }>;
    generateJWT(user: User): Promise<string>;
    generateJWTTwitter(twitterid: string): Promise<string>;
}
