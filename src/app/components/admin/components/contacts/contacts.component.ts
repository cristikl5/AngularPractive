import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserModel} from "../../../../models/user.model";
import {AdminService} from "../../services/admin.service";
import {map} from "rxjs/operators";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HeaderService} from "../header/header.service";
import {Subscription} from "rxjs";
import {NgsRevealConfig} from "ngx-scrollreveal";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {
  personalList!: UserModel[]
  private deleteId!: string
  searchText!: string
  searchTextSubscription!: Subscription

  constructor(private adminService: AdminService, private modalService: NgbModal, private headerService: HeaderService, private config: NgsRevealConfig) {
    config.duration = 2000;
    config.distance = "30px"
    config.origin = "top"
  }

  ngOnInit(): void {
    this.getContacts()
    this.getSearchValue()
  }

  getSearchValue() {
    this.searchTextSubscription = this.headerService.searchText$.subscribe((res) => {
      this.searchText = res
    })
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

  ngOnDestroy() {
    this.searchTextSubscription.unsubscribe()
  }

}
