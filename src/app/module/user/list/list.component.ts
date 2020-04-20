import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/_services/user.service';
import { Subscription, empty } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit, OnDestroy {

  users: any = [];
  emptyData = false;
  private subs: Subscription[] = [];
  constructor(
    private _userService: UserService,
    private router: Router) { }


  ngOnInit(): void {
    this.fetchUsers();

  }
  ngOnDestroy(): void {
    console.log('Unsubscribe');
    this.subs.forEach(s => s.unsubscribe());
  }

  fetchUsers = () => {
    this._userService.onFetchUser().subscribe(res => {
      this.users = res;
      if (res.length === 0) { return this.emptyData = true; }

    });
  }

  onClickUser = (user) => {
    localStorage.setItem('userD', JSON.stringify(user));
    this.router.navigate(['/home/detail/' + user._id]);

  }

  deleteUser = (id) => {
    const result = confirm('Are you sure to delete?');
    if (result) {
      this.subs.push(
        this._userService.onDeleteUser(id).subscribe(res => {
          this.fetchUsers();
        })
      );
    }

  }
}
