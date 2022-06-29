import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {NgsRevealConfig} from "ngx-scrollreveal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private config: NgsRevealConfig) {
    config.origin = "top"
    config.duration = 2000;
    config.distance = "30px"
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
