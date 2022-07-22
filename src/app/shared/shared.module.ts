import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgsRevealModule} from "ngx-scrollreveal";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgsRevealModule
  ],
  exports: [NgsRevealModule]
})
export class SharedModule {
}
