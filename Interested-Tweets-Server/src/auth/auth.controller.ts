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
import { TwitterGuard } from "./guards/twitter-guard";
import { OauthService } from "src/auth/oauth.service";
import { Response, Request } from "express";
import { InstagramGuard } from "./guards/instagram-guard";
import { GoogleGuard } from "./guards/google-guard";

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
      res.cookie("jwtToken", jwt);
      res.redirect("http://localhost:3000");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  @Get("GoogleLogin")
  @UseGuards(GoogleGuard)
  @ApiOkResponse({ description: "Redirects user to Google login page" })
  @ApiBadRequestResponse({ description: "Bad request. Please check your input data." })
  async googleLogin() {}

  @Get("GoogleCallBack")
  @UseGuards(GoogleGuard)
  @ApiOkResponse({ description: "Handles Google callback URL" })
  @ApiBadRequestResponse({ description: "Bad request. Please check your input data." })
  async googleCallback(@Req() req: Request, @Res() res: Response) {
    try {
      const { user, jwt } = req.user as { user: any; jwt: string };
      res.cookie("jwtToken", jwt);
      res.redirect("http://localhost:3000");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
