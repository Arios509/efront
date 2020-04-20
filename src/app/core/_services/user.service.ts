import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  onFetchUser = () => {
    return this.http.get(`${environment.API_SERVER}/api/user`)
      .pipe(map((res: any) => {
        return res
      }))
  }

  onCreateUser = (form) => {
    return this.http.post(`${environment.API_SERVER}/api/user`, form)
      .pipe(map((res: any) => {
        return res
      }))
  }

  onUpdateUser = (form) => {
    return this.http.put(`${environment.API_SERVER}/api/user`, form)
      .pipe(map((res: any) => {
        return res
      }))
  }

  onDeleteUser = (id) => {
    return this.http.delete(`${environment.API_SERVER}/api/user/` + id)
      .pipe(map((res: any) => {
        return res
      }))
  }

}
