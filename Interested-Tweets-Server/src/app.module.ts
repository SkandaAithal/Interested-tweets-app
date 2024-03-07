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
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'tweets-backend-db',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      ssl:true,
      type: 'postgres',
      url:'postgres://tweets_backend_db_user:VMsPzTwur4V6bJq7Sako55V3h15z9FOG@dpg-cnk69jv79t8c73c5hjr0-a.oregon-postgres.render.com/tweets_backend_db',
      host: process.env.Hostname,
      port: parseInt(process.env.Port),
      username: process.env.Username,
      password: process.env.Password,
      database: process.env.Database,
      autoLoadEntities: true,
      synchronize: true,
    }),
    InterestsModule,
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
