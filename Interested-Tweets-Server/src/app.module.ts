import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { InterestsModule } from './interests/interests.module';
import * as session from 'express-session';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'tweets-backend-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    InterestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: 'WnQYf8aJjnOxiHbB6BxBQxECWcHCgXzng3jBiDmQ569BUh3WZt',
          resave: false,
          saveUninitialized: false,
        }),
      )
      .forRoutes('*');
  }
}
