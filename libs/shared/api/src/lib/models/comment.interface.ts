import { IUser } from './user.interface';

export interface IComment {
  message: string;
  timestamp: Date;
  user: Pick<IUser, '_id' | 'name'>;
}

export type ICreateComment = Pick<IComment, 'message'>;
export type IUpdateComment = Pick<IComment, 'message'>;
