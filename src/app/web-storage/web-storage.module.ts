import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebStorageRoutingModule } from './web-storage-routing.module';
import { WebStorageComponent } from './web-storage.component';
import { LocalStorageComponent } from './local-storage.component';
import { SessionStorageComponent } from './session-storage.component';


@NgModule({
  declarations: [
    WebStorageComponent,
    LocalStorageComponent,
    SessionStorageComponent
  ],
  imports: [
    CommonModule,
    WebStorageRoutingModule
  ]
})
export class WebStorageModule { }
