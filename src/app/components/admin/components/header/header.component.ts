import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {NgsRevealConfig} from "ngx-scrollreveal";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {HeaderService} from "./header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  isSearching = false;

  constructor(private authService: AuthService, private config: NgsRevealConfig, private headerService: HeaderService) {
    config.origin = "top"
    config.duration = 2000;
    config.distance = "30px"
  }

  onIconClick() {
    this.isSearching = !this.isSearching;
  }

  onSearchInput(event: any) {
    this.headerService.getSearchText(event.target.value)
  }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut()
  }

  get isAdmin(): boolean {
    return this.authService.getRole() === 'ADMIN'
  }

}
