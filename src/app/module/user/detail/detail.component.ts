import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/_services/user.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  detail = JSON.parse(localStorage.getItem('userD'));
  private subs: Subscription[] = [];

  constructor(
    private router: Router,
    private _userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkID();
  }

  // Check if the ID is valid
  checkID = () => {
    const id = this.route.snapshot.params.id;
    if (id !== this.detail._id) {
      alert('Something went wrong, please try again');
      return this.router.navigate(['/home']);
    }
  }

  editProfile = () => {
    this.router.navigate(['/home/update']);
  }
  deleteUser = () => {
    const result = confirm('Are you sure to delete?');
    if (result) {
      this.subs.push(
        this._userService.onDeleteUser(this.detail._id).subscribe(res => {
          alert('Success delete user');
          this.router.navigate(['/home']);
        })
      );
    }

  }
}
