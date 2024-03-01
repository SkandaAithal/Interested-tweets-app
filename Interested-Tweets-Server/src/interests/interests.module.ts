import { Module } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { InterestsController } from './interests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interest } from './entities/interests.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Interest]),UsersModule],
  controllers: [InterestsController],
  providers: [InterestsService],
})
export class InterestsModule {}
