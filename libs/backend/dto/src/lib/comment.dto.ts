import {
  ICreateComment,
  IUpdateComment,
} from '@avans-nx-individueel/shared/api';
import { IsOptional, IsString } from 'class-validator';

export class CreateCommentDto implements ICreateComment {
  @IsString()
  message!: string;
}
export class UpdateCommentDto implements IUpdateComment {
  @IsOptional()
  @IsString()
  message!: string;
}
