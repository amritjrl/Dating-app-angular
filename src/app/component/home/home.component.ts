import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  flag = false;
  user = {};
  id!: string | null;
  users: User[] = [];
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.getProfile(this.id).subscribe((res) => {
      this.user = res;

      this.flag = res.isAdmin;
    });
  }
  showAll() {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
  }
}
