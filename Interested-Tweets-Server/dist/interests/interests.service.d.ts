import { UsersService } from './../users/users.service';
import { CreateInterestDto } from './dto/create-interest.dto';
import { Interest } from './entities/interests.entity';
import { EntityManager } from 'typeorm';
export declare class InterestsService {
    private manager;
    private usersService;
    constructor(manager: EntityManager, usersService: UsersService);
    createInterest(interestData: CreateInterestDto): Promise<{
        interest: string;
    } & Interest>;
}
