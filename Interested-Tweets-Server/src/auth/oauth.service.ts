import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { UsersService } from "src/users/users.service";

@Injectable()
export class OauthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly usersService: UsersService
  ) {}

  private readonly JWT_SECRET_KEY = "LiftOffSecretKey2012";

  async validateOAuthLogin(
    userProfile: any,
    provider: string
  ) {
    try {
      const { twitterid ,name} = userProfile;
      let existingUser = await this.userRepository.findOne({ where: { twitterid } })
      if (!existingUser) {
        existingUser = this.userRepository.create({
          name,
          twitterid,
        });
        await this.userRepository.save(existingUser);
      }
      const jwt = await this.usersService.generateJWTTwitter(twitterid);
      return { jwt, user: existingUser };
    } catch (err) {
      throw new InternalServerErrorException("validateOAuthLogin", err.message);
    }
  }
}
