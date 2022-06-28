import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {UserModel} from "../models/user.model";
import {AdminService} from "../components/admin/services/admin.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<UserModel> {
  constructor(private adminService: AdminService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    return this.adminService.getPerson(route.params?.['id'])
  }
}
