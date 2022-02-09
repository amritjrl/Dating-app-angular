import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  @Input() id!: string | null;
  users: User[] = [];
  logedIn!: User;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllByGender(this.id).subscribe((data) => {
      this.users = data;
      this.userService.getProfile(this.id).subscribe((res) => {
        this.logedIn = res;
      });
    });
  }
  onLike(user: any) {
    this.userService.likeProfile(this.id, user).subscribe((res) => {});
  }
}
