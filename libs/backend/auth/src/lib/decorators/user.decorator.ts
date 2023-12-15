import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserRole } from '@avans-nx-individueel/shared/api';

export type AuthUser = { id: string; role: UserRole };
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
