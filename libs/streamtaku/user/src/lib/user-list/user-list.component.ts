import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user,service';
import { Observable, delay, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'avans-nx-individueel-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  users$: Observable<User[]> | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.getAll();
  }

  ngOnDestroy(): void {}
}
