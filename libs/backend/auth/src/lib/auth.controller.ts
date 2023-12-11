import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { IUser } from '@avans-nx-individueel/shared/api';
import { IUserLogin } from '@avans-nx-individueel/shared/api';
import { LoginDto } from '@avans-nx-individueel/backend/dto';
import { AuthGuard } from './auth.guards';
import { userInfo } from 'os';
import { Public } from './decorators/decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.emailAddress, loginDto.password);
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
