import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";
import {AdminService} from "../../services/admin.service";
import {map} from "rxjs/operators";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList!: UserModel[]

  constructor(private adminService: AdminService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts() {
    this.adminService.getPersons().pipe(map((user) => user.slice(0, 5))).subscribe((res: UserModel[]) => {
      this.personalList = res;
    })
  }

  open(content: any, user: UserModel) {
    this.modalService.open(content).result.then((res) => {
      if (res === 'delete') {
        this.deleteUser(user)
      }
    })
  }

  deleteUser(selectedUser: UserModel) {
    this.personalList = this.personalList.filter(user => user.id !== selectedUser.id)
  }

}
