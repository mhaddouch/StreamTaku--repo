import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IUser, UserRole } from '@avans-nx-individueel/shared/api';
import { IsMongoId } from 'class-validator';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  _id!: string;

  @Prop({
    required: true,
    unique: true,
  })
  name!: string;

  @Prop({
    required: true,
    select: false, // do not return password in select statements
    type: String,
  })
  password = '';

  @Prop({
    required: true,
    type: String,
    select: true,
    unique: true,
    // validate: {
    //     validator: isEmail,
    //     message: 'should be a valid email address'
    // }
  })
  emailAddress = '';

  @Prop({
    required: false,
    select: true,
    default: 'https://cdn-icons-png.flaticon.com/512/219/219969.png',
  })
  profileImgUrl!: string;

  @Prop({
    required: false,
    type: String,
    default: UserRole.Guest, // alle validatie moet in de schemas weg
  })
  role: UserRole = UserRole.Guest;
}

export const UserSchema = SchemaFactory.createForClass(User);
