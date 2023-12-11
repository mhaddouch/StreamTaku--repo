import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@avans-nx-individueel/backend/schemas';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Roles } from './decorators/role.decorator';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signIn(emailAddress: string, pass: string): Promise<any> {
    const user = await this.userModel
      .findOne({ emailAddress })
      .select('+password');
    console.log(pass, user);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
