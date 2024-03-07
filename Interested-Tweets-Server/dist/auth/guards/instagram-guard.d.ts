import { ExecutionContext } from '@nestjs/common';
declare const InstagramGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class InstagramGuard extends InstagramGuard_base {
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
