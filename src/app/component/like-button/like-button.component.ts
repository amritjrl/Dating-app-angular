import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  @Input() user!: User;
  luid: any;

  likeArr = [];

  likedArr = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let uid = this.route.snapshot.paramMap.get('id');
    this.userService.getProfile(uid).subscribe((data) => {
      this.likeArr = data.liked;
      this.likeFilter(this.likeArr);
    });
  }
  likeFilter(lArr: any) {
    for (let like of lArr) {
      if (like === this.user._id) {
        this.luid = like;
        return this.luid;
      }
    }
  }
}
