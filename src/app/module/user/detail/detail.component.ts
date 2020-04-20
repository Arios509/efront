import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  detail = JSON.parse(localStorage.getItem('userD'));

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  editProfile = () => {
    this.router.navigate(['/home/update']);
  }
}
