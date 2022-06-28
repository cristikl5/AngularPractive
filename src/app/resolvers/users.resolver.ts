import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {AdminService} from "../components/admin/services/admin.service";
import {catchError, delay} from "rxjs/operators";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<UserModel[]> {
  constructor(private adminService: AdminService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {
    return this.adminService.getPersons().pipe(delay(1000));
  }
}
