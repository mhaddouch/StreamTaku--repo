export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

export class User {
  id: number = 0;
  userName: string = '';
  emailAdress: string = '';
  age: Date = new Date();

  role: UserRole = UserRole.guest;

  constructor(userName = '', emailAdress = '', age = new Date(),role = UserRole) {
    this.emailAdress = emailAdress;
    this.userName = userName;
    this.age = age;
   
  }
}
