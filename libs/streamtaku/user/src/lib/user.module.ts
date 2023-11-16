import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { routes } from './user.routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  providers: [provideRouter(routes)],
  declarations: [UserListComponent, UserEditComponent, UserDetailComponent],
})
export class UserModule {}
import { RouterLink, provideRouter } from '@angular/router';
