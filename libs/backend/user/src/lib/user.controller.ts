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
import { User } from '../../../schemas/src/lib/user.schema';
import { IUser } from '@avans-nx-individueel/shared/api';
import { Public } from '@avans-nx-individueel/backend/auth';
import { CreateUserDto } from '@avans-nx-individueel/backend/dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async getData() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async getId(@Param('id') id: string): Promise<IUser> {
    return await this.usersService.findOne(id);
  }

  @Public()
  @Post()
  async create(@Body() newUser: CreateUserDto): Promise<IUser> {
    return await this.usersService.create(newUser);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedUser: User
  ): Promise<IUser> {
    return await this.usersService.update(id, updatedUser);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IUser> {
    return await this.usersService.remove(id);
  }
}
