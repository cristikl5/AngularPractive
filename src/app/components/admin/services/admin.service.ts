import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../../models/user.model";

const base = 'https://jsonplaceholder.typicode.com'

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) {
  }

  getPersons(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${base}/users`)
  }

  getPerson(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${base}/users/${id}`)
  }
}
