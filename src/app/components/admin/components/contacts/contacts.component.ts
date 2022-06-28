import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";
import {AdminService} from "../../services/admin.service";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList!: UserModel[]

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts() {
    this.adminService.getPersons().pipe(map((user) => user.slice(0, 5))).subscribe((res: UserModel[]) => {
      this.personalList = res;
    })
  }

  deleteUser(selectedUser: UserModel) {
    this.personalList = this.personalList.filter((user) => {
      return user.id !== selectedUser.id
    })
  }

}
