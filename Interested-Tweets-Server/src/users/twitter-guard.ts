import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class TwitterGuard extends AuthGuard('twitter') {
  async CanActivate(context: ExecutionContext) {
    const isAuth = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return isAuth;
  }
}
