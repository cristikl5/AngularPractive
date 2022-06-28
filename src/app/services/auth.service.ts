import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  setRole(value: string) {
    localStorage.setItem('role', value)
  }

  getRole() {
    return localStorage.getItem('role')
  }

  setToken(value: string) {
    localStorage.setItem('token', value)
  }

  removeToken() {
    localStorage.removeItem('token')
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
      this.setRole('ADMIN')
      return of(true)
    } else {
      this.setRole('USER')
      this.setToken('asfasdijasodfi');
      return of(true)
    }
    return throwError(() => new Error('Failed to login'))
  }

  register(userInfo: { username: string, password: string }): Observable<string | boolean> {
    if (userInfo.username !== 'admin' && userInfo.password === 'admin123') {
      this.setToken('sodiahosuidvhids')
      return of(true)
    }
    return throwError(() => new Error('Failed to login'))
  }

  logOut() {
    this.removeToken()
    this.router.navigate(['/login'])
  }
}
