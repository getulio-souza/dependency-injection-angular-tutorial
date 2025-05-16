import { Component, Inject } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  imports: [UserListComponent, UserDetailComponent, CommonModule, FormsModule],
})
export class AdminComponent {
  constructor(
    private userService: UserService
  ){}

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  createNewUser() {
    this.userService.createUser(this.name, this.gender, this.subType, this.status);
    console.log('users:', this.userService.users)
  }
}
