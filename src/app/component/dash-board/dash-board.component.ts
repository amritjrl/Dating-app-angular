import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  @Input() users: User[] = [];

  constructor() {}

  ngOnInit(): void {}
}
