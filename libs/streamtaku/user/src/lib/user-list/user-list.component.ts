import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user,service';
import { Observable } from 'rxjs';

@Component({
  selector: 'avans-nx-individueel-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  users$: Observable<User[]> | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }
}