import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      userName: 'Sengoku',
      emailAdress: 'marineFord@host.com',
      age: new Date(1940, 4, 4),
      role: UserRole.admin,
    },
    {
      id: 1,
      userName: 'SHANKS',
      emailAdress: 'redhear@host.com',
      age: new Date(1970, 10, 7),
      role: UserRole.guest,
    },
    {
      id: 2,
      userName: 'Buggy',
      emailAdress: 'DClown@host.com',
      age: new Date(1970, 8, 7),
      role: UserRole.guest,
    },
    {
      id: 3,
      userName: 'Ustauss',
      emailAdress: 'Kidd@host.com',
      age: new Date(1995, 11, 3),
      role: UserRole.guest,
    },
    {
      id: 4,
      userName: 'Ace',
      emailAdress: 'FireFist@host.com',
      age: new Date(2000, 9, 6),
      role: UserRole.admin,
    },
  ];

  constructor() {}

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }
  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }
}
