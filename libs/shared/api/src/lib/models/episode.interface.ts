import { IComment } from './comment.interface';
import { IUser } from './user.interface';

export interface IEpisode {
  _id: string;
  title:string;
  episodeTitle: string;
  episodeNumber: number;
  publisher: Pick<IUser, '_id' | 'name'>;
  publishedDate: Date;
  videoUrl: string;
  comment: IComment[];
}

export type ICreateEpisode = Pick<IEpisode, 'episodeTitle' | 'episodeNumber'|'videoUrl'>;
export type IUpdateEpisode = Pick<IEpisode, 'episodeTitle' | 'episodeNumber'|'videoUrl'>;