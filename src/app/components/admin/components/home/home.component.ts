import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {NgsRevealConfig} from "ngx-scrollreveal";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private config: NgsRevealConfig) {
    config.duration = 2000;
    config.distance = "30px"
    config.origin = "top"
  }

  ngOnInit(): void {
  }

  get isAdmin() {
    return this.authService.getRole() === 'ADMIN'
  }

}
