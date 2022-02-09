import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  onSubmit(user: User) {
    this.userService.signUp(user).subscribe((res) => {
      const user = res['info'];
      localStorage.setItem('access_token', res['accessToken']);

      this.router.navigate(['/home', user._id]);
    });
  }
}
