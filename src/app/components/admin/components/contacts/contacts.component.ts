import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";
import {AdminService} from "../../services/admin.service";
import {map} from "rxjs/operators";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  personalList!: UserModel[]
  private deleteId!: string
  searchText!: string

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
    this.deleteId = user.id
    this.modalService.open(content)
  }

  onDelete() {
    this.personalList = this.personalList.filter(user => {
      return user.id !== this.deleteId
    })
    this.modalService.dismissAll()
  }
}
