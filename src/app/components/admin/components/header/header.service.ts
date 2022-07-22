import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _searchTextSource = new Subject<string>()
  searchText$ = this._searchTextSource.asObservable()

  constructor() {
  }

  getSearchText(text: string) {
    this._searchTextSource.next(text)
  }
}
