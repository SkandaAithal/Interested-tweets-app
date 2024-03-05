import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TwitterStrategy } from './strategy/twitter.strategy';
import { OauthService } from './oauth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { oAuthController } from 'src/auth/auth.controller';
import { UsersModule } from 'src/users/users.module';
import { InstagramStrategy } from './strategy/instagram.strategy';
import { GoogleStrategy } from './strategy/google.strategy';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'twitter' }),
    TypeOrmModule.forFeature([User]),
    UsersModule
  ],
  controllers: [oAuthController],
  providers: [TwitterStrategy, OauthService, InstagramStrategy,GoogleStrategy],
})
export class AuthModule {}
