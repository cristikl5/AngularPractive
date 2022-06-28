import
{NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AdminDashboardComponent} from "./components/admin-dashboard/admin-dashboard.component";
import {HomeComponent} from "./components/home/home.component";
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactsDetailsComponent} from './components/contacts-details/contacts-details.component';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AdminDashboardComponent, HomeComponent, ContactsComponent, ContactsDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [NgbActiveModal]
})
export class AdminModule {
}
