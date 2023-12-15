import {
  Genre,
  IAnime,
  IComment,
  IEpisode,
  IUser,
} from '@avans-nx-individueel/shared/api';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as S } from 'mongoose';
import { CommentSchema } from './comment.schema';

export type EpisodeDocument = HydratedDocument<Episode>;

export class Episode implements IEpisode {
  _id!: string;
  @Prop({ required: true })
  episodeTitle!: string;

  @Prop({ required: true })
  episodeNumber!: number;

  videoUrl!: string;
  @Prop({ type: [CommentSchema], required: true })
  comment!: IComment[];
  @Prop({ type: { _id: S.Types.ObjectId }, required: true })
  publisher!: Pick<IUser, '_id' | 'name'>;

  @Prop({ required: true, default: new Date() })
  publishedDate!: Date;
  @Prop({ type: S.Types.ObjectId, ref: 'Anime' }) // Reference to Anime schema
  title!: string;
}
export const EpisodeSchema = SchemaFactory.createForClass(Episode);
