import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../../schemas/src/lib/user.schema';
import { CreateUserDto } from '@avans-nx-individueel/backend/dto';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
  async create(user: CreateUserDto): Promise<User> {
    if (await this.userModel.findOne({ emailAddress: user.emailAddress })) {
      throw new HttpException(
        'User email already exist',
        HttpStatus.BAD_REQUEST
      );
    } else if (await this.userModel.findOne({ name: user.name })) {
      throw new HttpException(
        'User name already exist',
        HttpStatus.BAD_REQUEST
      );
    }
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async update(id: string, user: CreateUserDto): Promise<User> {
    const result = await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
    });
    if (!result) {
      throw new Error('User not found');
    }

    return result;
  }

  async remove(id: string): Promise<User> {
    const result = await this.userModel.findByIdAndDelete(Object(id));
    if (!result) {
      throw new Error('User not found');
    }

    return result;
  }
}
