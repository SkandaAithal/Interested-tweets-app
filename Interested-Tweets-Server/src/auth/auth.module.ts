import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TwitterStrategy } from './twitter.strategy';
import { OauthService } from './oauth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { oAuthController } from 'src/auth/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'twitter' }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [oAuthController],
  providers: [TwitterStrategy, OauthService],
})
export class AuthModule {}
