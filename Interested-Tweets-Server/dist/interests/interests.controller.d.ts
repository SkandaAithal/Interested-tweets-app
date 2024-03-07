import { InterestsService } from './interests.service';
import { CreateInterestDto } from './dto/create-interest.dto';
import { Interest } from './entities/interests.entity';
export declare class InterestsController {
    private readonly interestsService;
    constructor(interestsService: InterestsService);
    saveInterest(interest: CreateInterestDto): Promise<Interest>;
}
