export enum UserRole {
  Guest = 'Guest',
  Admin = 'Admin',
  Unknown = 'Unknown',
}

export interface IUser {
  _id: string;
  name: string;
  emailAddress: string;
  password: string;
  profileImgUrl: string;
  role: UserRole;
}

export type ILoginUser = Pick<IUser, 'emailAddress' | 'password'>;
export type ICreateUser = Pick<
  IUser,
  'name' | 'emailAddress' | 'password' | 'profileImgUrl' | 'role'
>;
export type IUpdateUser = Pick<
  IUser,
  'name' | 'emailAddress' | 'password' | 'profileImgUrl' | 'role'
>;
