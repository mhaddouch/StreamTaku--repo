import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user,service';
import { User } from '../user.model';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, delay, switchMap, tap } from 'rxjs';

@Component({
  selector: 'avans-nx-individueel-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  /*  userId: string | null = null;
  user: User | null = null; */
  user$: Observable<User> | undefined;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  /* ngOnInit(): void {
    // Deze manier is statisch: bij navigatie krijgen we niet de nieuwe id uit de URL.
    // this.userId = this.route.snapshot.paramMap.get('id');

    // Deze manier maakt gebruik van RxJs Observables.
    // We komen hier bij services en HTTP op terug.
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.user = this.userService.getUserById(Number(this.userId)); // Waarom 'Number'?
    });
  } */

  ngOnInit(): void {
    this.user$ = this.route.paramMap.pipe(
      delay(1500),
      tap((params: ParamMap) => console.log('user.id = ', params.get('id'))),
      switchMap((params: ParamMap) =>
        this.userService.getById(params.get('id'))
      ),
      tap(console.log)
    );
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}