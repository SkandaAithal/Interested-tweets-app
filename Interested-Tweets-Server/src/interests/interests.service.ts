import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from './entities/interests.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class InterestsService {
  constructor(private manager:EntityManager,
  private usersService:UsersService
  ){}

  async createInterest(interestData: CreateInterestDto) {
    const user = await this.usersService.getUserById(interestData.userid);
    const newInterestData = { interest: interestData.interest };
    const newInterest = await this.manager.save(Interest, newInterestData);
    user.interests = [...user.interests, newInterest];
    await user.save();
    return newInterest;
  }
}
