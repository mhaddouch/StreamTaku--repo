import { Component } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user,service';
import { Observable, Subscription, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'avans-nx-individueel-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {
  userId: string | null = null;
  user!: User;
  user$: Observable<User> | undefined;
  subscription?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /**
     * We gebruiken de EditComponent om een bestaande record te wijzigen
     * én om een nieuwe record te maken.
     * Een bestaande record heeft een :id in de URL, bv '/users/1/edit'
     * Als die er dus is gaan we de user ophalen en bewerken.
     * Als er geen :id in de URL zit (via '/users/new') maken we een nieuwe record.
     */
    /* this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      if (this.userId) {
        // Bestaande user
        this.user = this.userService.getById(Number(this.user?.id));
      } else {
        // Nieuwe user
        this.user = new User();
      }
    }); */

    this.subscription = this.route.paramMap
      .pipe(
        tap(console.log),
        switchMap((params) => {
          if (!params.get('id')) {
            return of(new User());
          } else {
            // You may want to return some observable based on the ID
            // For now, let's return an observable with the user itself
            return this.userService.getById(params.get('id'));
          }
        }),
        tap(console.log)
      )
      .subscribe((user: User) => {
        // Handle the subscribed user here
        this.user = user;
        console.log(this.user);
      });
  }

  /* save() {
    console.log('Hier komt je save actie');
    this.router.navigate(['..'], { relativeTo: this.route });
  } */
  onSubmit(): void {
    console.log('onsubmit', this.user);

    if (this.user?.id) {
      console.log('update user');
      this.userService
        .update(this.user)
        .subscribe(() =>
          this.router.navigate(['..'], { relativeTo: this.route })
        );
    } else {
      this.userService.create(this.user);
    }
  }
}
