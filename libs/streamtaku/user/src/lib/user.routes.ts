import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '',pathMatch:"full", component: UserListComponent },
];
