import { IUserLogin, UserRole } from '@avans-nx-individueel/shared/api';
import {
  IsEmail,
  IsEnum,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';
import { IUser } from '@avans-nx-individueel/shared/api';

export class LoginDto implements IUserLogin {
  @IsNotEmpty()
  emailAddress!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;
}

export class CreateUserDto implements IUserLogin {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsEmail()
  @IsNotEmpty()
  emailAddress!: string;

  @MinLength(10, {
    message: 'password is too short',
  })
  @IsNotEmpty()
  @IsString()
  password!: string;

  @IsString()
  @IsUrl()
  profileImgUrl!: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole = UserRole.Unknown;
}
