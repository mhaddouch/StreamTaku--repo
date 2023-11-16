import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserListComponent },
  { path: ':id', pathMatch: 'full', component: UserDetailComponent },
  { path: ':id/edit', pathMatch: 'full', component: UserEditComponent },
];
