import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Repository } from "typeorm";
import { UsersService } from "src/users/users.service";
import { Profile } from "passport";

@Injectable()
export class OauthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly usersService: UsersService
  ) {}

  private readonly JWT_SECRET_KEY = "LiftOffSecretKey2012";

  async validateTwitterOAuth(
    userProfile: any,
    provider: string
  ) {
    try {
      const { socialid ,name} = userProfile;
      let existingUser = await this.userRepository.findOne({ where: { socialid } })
      if (!existingUser) {
        existingUser = this.userRepository.create({
          name,
          socialid,
        });
        await this.userRepository.save(existingUser);
      }
      const jwt = await this.usersService.generateJWTTwitter(socialid);
      return { jwt, user: existingUser };
    } catch (err) {
      throw new InternalServerErrorException("validateOAuthLogin", err.message);
    }
  }

  async validateGoogleOAuth(
    userProfile: any,
    provider: string
  ) {
    try {
      const { socialid, name, email } = userProfile;

      let existingUser = await this.userRepository.findOne({ where: { email } });

      if (!existingUser) {
        existingUser = this.userRepository.create({
          name,
          email,
          socialid,
        });
        await this.userRepository.save(existingUser);
      }
      
      const {id} = existingUser;

      const jwt = await this.usersService.generateJWTTwitter(socialid);
      return {jwt,user:existingUser};
    } catch (err) {
      throw new InternalServerErrorException("validateOAuthLogin", err.message);
    }
  }
}

