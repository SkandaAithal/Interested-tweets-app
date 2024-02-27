import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User | {
        success: boolean;
        message: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<string>;
}
