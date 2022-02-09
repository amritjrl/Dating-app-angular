import {
  Component,
  NgModule,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { login, User } from 'src/app/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(data: login) {
    this.userService.login(data).subscribe((res) => {
      const user = res['info'];
      localStorage.setItem('access_token', res['accessToken']);
      console.log(res);
      this.router.navigate(['/home', user._id]);
    });
  }
}
