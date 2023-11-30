import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './shema/user.schema';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async getData() {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() newUser: User) : Promise<User> {
    return await this.usersService.create(newUser);
  }

}
