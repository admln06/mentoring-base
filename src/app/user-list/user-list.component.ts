import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

    readonly usersApiService = inject(UsersApiService);
    readonly userService = inject(UserService);
    
    constructor() {
      this.usersApiService.getUsers().subscribe(users => {
        this.userService.setUsers(users);
      });
    }

    deleteUser(id: number) {
      this.userService.deleteUser(id);
    }
}
