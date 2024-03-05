import {
  Controller,
  Get,
  HttpStatus,
  Req,
  Res,
  UseGuards,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { TwitterGuard } from "./twitter-guard";
import { OauthService } from "src/auth/oauth.service";
import { Response, Request } from "express";
import { InstagramGuard } from "./instagram-guard";
import { GoogleGuard } from "./google-guard";

@ApiTags("auth")
@ApiBearerAuth() // Adding bearer authentication to all endpoints in this controller
@Controller("auth")
export class oAuthController {
  constructor(private readonly oauthService: OauthService) {}

  @Get("login")
  @UseGuards(TwitterGuard)
  @ApiOkResponse({ description: "Redirects user to Twitter login page" })
  @ApiBadRequestResponse({
    description: "Bad request. Please check your input data.",
  })
  async twitterLogin() {}

  @Get("callbackUrl")
  @UseGuards(TwitterGuard)
  @ApiOkResponse({ description: "Handles Twitter callback URL" })
  @ApiBadRequestResponse({
    description: "Bad request. Please check your input data.",
  })
  async twitterCallback(@Req() req: Request, @Res() res: Response) {
    try {
      const { user, jwt } = req.user as { user: any; jwt: string };
      // res.json({ jwt });
      res.cookie('jwtToken',jwt);//,{httpOnly:true}
      res.redirect('http://localhost:3000')
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  @Get("Instalogin")
  @UseGuards(InstagramGuard)
  @ApiOkResponse({ description: "Redirects user to Instagram login page" })
  @ApiBadRequestResponse({
    description: "Bad request. Please check your input data.",
  })
  async instagramLogin() {}

  @Get("Instacallback")
  @UseGuards(TwitterGuard)
  @ApiOkResponse({ description: "Handles Twitter callback URL" })
  @ApiBadRequestResponse({
    description: "Bad request. Please check your input data.",
  })
  async InstaCallback(@Req() req: Request, @Res() res: Response) {}
    // try {
    //   const { user, jwt } = req.user as { user: any; jwt: string };
    //   // res.json({ jwt });
    //   res.cookie('jwtToken',jwt);//,{httpOnly:true}
    //   res.redirect('http://localhost:3000')
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: "Internal server error" });
    // }
  // }

  @UseGuards(GoogleGuard)
@Get("GoogleLogin")
async googleLogin() {
  // Initiate Google OAuth authentication flow (handled by Passport)
}

@UseGuards(GoogleGuard)
@Get("GoogleCallBack")
async googleCallback(@Req() req, @Res() res) {
  try {
    // const { id, jwt } = req.user as { id:any; jwt: string };
    const {jwt} = req.user as { jwt: string };
    // console.log(user,jwt)
    // res.json({ jwt });
    // console.log(id)
    console.log(jwt)
    res.cookie('jwtToken', jwt);//,{httpOnly:true}
    res.redirect('http://localhost:3000');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
}
