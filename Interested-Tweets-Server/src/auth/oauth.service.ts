import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OauthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async validateOAuthLogin(profile) {
    const { twitterid } = profile;
    if (await this.userRepository.findOne({ where: { twitterid } })) {
      return 'Welcome Back';
    }
    return this.createOAuthUser(profile);
  }

  async createOAuthUser(profile) {
    const { twitterid, name } = profile;
    const user = this.userRepository.create({
      name,
      twitterid,
    });
    return await this.userRepository.save(user);
  }
}
