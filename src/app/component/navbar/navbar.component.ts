import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  flag: boolean = false;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.flag = this.userService.isLogedIn();
  }

  ngOnInit(): void {}
  logout() {
    this.userService.doclear();
    this.router.navigate(['/login']);
  }
  hasRoute(Route: string) {
    return this.router.url === Route;
  }
}
