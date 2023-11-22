export enum Genre {
  action = 'actie',
  editor = 'editor',
  guest = 'guest',
}

export class Anime {
  id: string = '';
  userName: string = '';
  emailAdress: string = '';
  age: Date = new Date();

  role: Genre = Genre.guest;

  constructor(userName = '', emailAdress = '', age = new Date(), role = Genre) {
    this.emailAdress = emailAdress;
    this.userName = userName;
    this.age = age;
  }
}
