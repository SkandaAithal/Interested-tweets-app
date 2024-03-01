import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { InterestsService } from './interests.service';
import { CreateInterestDto } from './dto/create-interest.dto';
import { UpdateInterestDto } from './dto/update-interest.dto';
import { Interest } from './entities/interests.entity';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestsService: InterestsService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async saveInterest(@Body() interest: CreateInterestDto) :Promise<Interest> {
    return await this.interestsService.createInterest(interest);
  }
}
