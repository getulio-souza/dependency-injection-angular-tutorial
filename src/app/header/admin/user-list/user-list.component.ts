import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../Services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})

export class UserListComponent implements OnInit {
  constructor(
    private userService: UserService
  ) { }

  userList: any[] = [];

  ngOnInit(): void {
    this.userList = this.userService.getallUsers();
  }
}
