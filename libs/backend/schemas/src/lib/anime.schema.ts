import {
  Genre,
  IAnime,
  IEpisode,
  IUser,
} from '@avans-nx-individueel/shared/api';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Schema as S } from 'mongoose';
import { EpisodeSchema } from './episode.schema';
import { User } from './user.schema';

export type AnimeDocument = HydratedDocument<Anime>;

export class Anime implements IAnime {
  _id!: string;
  @Prop({ required: true })
  title!: string;
  @Prop({ type: String, required: true })
  genre!: Genre;
  @Prop({ required: true })
  writer!: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  publisher!: User;

  @Prop({ required: true, default: new Date() })
  publishedDate: Date = new Date();

  @Prop({
    required: false,
    select: true,
    default:
      'https://i.etsystatic.com/11603536/r/il/595c11/1110912983/il_fullxfull.1110912983_5y4r.jpg',
  })
  animeImageUrl!: string;
}
export const AnimeSchema = SchemaFactory.createForClass(Anime);
