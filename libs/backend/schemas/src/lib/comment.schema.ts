import {
  Genre,
  IAnime,
  IComment,
  IEpisode,
  IUser,
} from '@avans-nx-individueel/shared/api';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as S } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

export class Comment implements IComment {
  _id!: string;
  @Prop({ required: true })
  message!: string;

  @Prop({ required: true, default: new Date() })
  timestamp: Date = new Date();

  @Prop({ type: { _id: S.Types.ObjectId, name: String }, required: true })
  user!: Pick<IUser, '_id' | 'name'>;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
