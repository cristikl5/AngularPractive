import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserModel} from "../../../../../models/user.model";

@Component({
  selector: 'app-contacts-delete-modal',
  templateUrl: './contacts-delete-modal.component.html',
  styleUrls: ['./contacts-delete-modal.component.scss']
})
export class ContactsDeleteModalComponent implements OnInit {
  @Input() selectedUser!: UserModel

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }

}
