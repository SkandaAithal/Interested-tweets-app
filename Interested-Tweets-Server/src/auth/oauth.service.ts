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

  // async validateOAuthLogin(profile) {
  //   const { twitterid } = profile;
  //   if (await this.userRepository.findOne({ where: { twitterid } })) {
  //     return this.usersService.generateJWTTwitter(twitterid);
  //   }
  //   return this.createOAuthUser(profile);
  // }

  // async createOAuthUser(profile) {
  //   const { twitterid, name } = profile;
  //   const user = this.userRepository.create({
  //     name,
  //     twitterid,
  //   });
  //   return await this.userRepository.save(user);
  // }
  private readonly JWT_SECRET_KEY = "LiftOffSecretKey2012";

  // constructor(
  //   private jwtService: JwtService,
  //   @InjectRepository(User) private userRepository: Repository<User>
  // ) {}

  async validateOAuthLogin(
    userProfile: any,
    provider: string
  ) {
    try {
      const { twitterid ,name} = userProfile;
      let existingUser = await this.userRepository.findOne({ where: { twitterid } })
      // const { twitterid, name } = userProfile;
      if (!existingUser) {
        existingUser = this.userRepository.create({
          name,
          twitterid,
        });
        // existingUser = await this.userRepository.create({ ...userProfile, provider, providers: [{ providerId: userProfile.userId, name: provider }] });
      }

      // const { userId, displayName, picture, providers, roles } = existingUser;
      // const signingPayload = { userId, displayName, picture, providers, roles };
      // const jwt: string = sign(signingPayload, this.JWT_SECRET_KEY, {
      //   expiresIn: 3600,
      // });
      const jwt = await this.usersService.generateJWTTwitter(twitterid);
      return { jwt, user: existingUser };
    } catch (err) {
      throw new InternalServerErrorException("validateOAuthLogin", err.message);
    }
  }
}
