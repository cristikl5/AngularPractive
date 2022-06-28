import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  setToken(value: string) {
    localStorage.setItem('token', value)
  }


  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean {
    return !!this.getToken()
  }

  login(userInfo: { username: string, password: string }): Observable<string | boolean> {
    if (userInfo.username === 'admin' && userInfo.password === 'admin123') {
      this.setToken('asfasdkohfklasdnv');
      return of(true)
    }
    return throwError(() => new Error('Failed to login'))
  }

  logOut() {
    this.router.navigate(['/login'])
  }
}
