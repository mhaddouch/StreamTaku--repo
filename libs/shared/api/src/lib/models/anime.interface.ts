import { IEpisode } from './episode.interface';
import { IUser } from './user.interface';

export enum Genre {
  action = 'action',
  adventure = 'adventure',
  romance = 'romance',
  comedy = 'comedy',
  triller = 'triller',
  horror = 'horror',
  crime = 'crime',
  fantasy = 'fantasy',
  sport = 'sport',
}
export interface IAnime {
  _id: string;
  title: string;
  genre: Genre;
  writer: string;
  publisher: Pick<IUser, '_id' | 'name'>;
  publishedDate: Date;
  animeImageUrl: string;
}

export type ICreateAnime = Pick<
  IAnime,
  'title' | 'genre' | 'writer' | 'animeImageUrl'
>;
export type IUpdateAnime = Pick<
  IAnime,
  'title' | 'genre' | 'writer' | 'animeImageUrl'
>;
