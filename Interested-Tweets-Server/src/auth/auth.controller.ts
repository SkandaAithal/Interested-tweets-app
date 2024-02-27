import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { TwitterGuard } from 'src/users/twitter-guard';
import { OauthService } from 'src/auth/oauth.service';
import AuthenticatedRequest from './authenticated-request.interface';

@ApiTags('auth')
@ApiBearerAuth() // Adding bearer authentication to all endpoints in this controller
@Controller('auth')
export class oAuthController {
  constructor(private readonly oauthService: OauthService,
    ) {}

  @Get('login')
  @UseGuards(TwitterGuard)
  @ApiOkResponse({ description: 'Redirects user to Twitter login page' })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check your input data.',
  })
  async twitterLogin(@Req() req: Request, @Res() res: Response) {
  }

  @Get('callbackUrl')
  @UseGuards(TwitterGuard)
  @ApiOkResponse({ description: 'Handles Twitter callback URL' })
  @ApiBadRequestResponse({
    description: 'Bad request. Please check your input data.',
  })
  async twitterCallback(@Req() req: Request, @Res() res: Response) {
    // Handle Twitter callback URL
    // this.oauthService.twitterCallback(req, res);
  }
}
