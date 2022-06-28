import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit {
  user!: UserModel

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({user}) => {
      this.user = user;
    })
  }


}
