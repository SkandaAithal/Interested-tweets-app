import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { EntityManager, Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,private readonly manager: EntityManager
  ) {}

  private async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  }

  async register(createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    const hashedPassword = await this.hashPassword(password);

    const user = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    try {
      await this.userRepository.save(user);
      return "User registered successfully" ;
    } catch (error) {
      if (error.code === "23505" && error.detail.includes("email")) {
        throw new BadRequestException("Email already registered, please use different email");
      } else {
        throw new BadRequestException("Registration failed");
      }
    }
  }

  async login(loginUserDto: LoginUserDto) {
    if (!loginUserDto || !loginUserDto.email || !loginUserDto.password) {
      throw new BadRequestException("Invalid authentication credentials");
    }
    const { name, email, password } = loginUserDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException("Invalid credentials");
    }
    const jwtToken = await this.generateJWT(user);
    return {
      message: "Login Successful",
      token: jwtToken,
    };
  }
  async generateJWT(user: User) {
    const jwtPayload = { id: user.id, name: user.name };
    const jwtToken = await this.jwtService.signAsync(jwtPayload, {
      expiresIn: "1d",
      algorithm: "HS512",
    });
    return jwtToken;
  }
  async generateJWTTwitter(twitterid: string) {
    const jwtPayload = { twitterid };
    const jwtToken = await this.jwtService.signAsync(jwtPayload, {
      expiresIn: "1d",
      algorithm: "HS512",
    });
    return jwtToken;
  }

  async getUserById(id: number): Promise<User> {
    return await this.manager.findOne(User, {
      where: { id },
      relations: ['interests'],
    });
  }
  
}
