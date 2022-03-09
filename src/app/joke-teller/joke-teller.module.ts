import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { SharedModule } from '../shared/shared.module';
import { ApiService } from '../shared/api.service';
import { JokeTellerRoutingModule } from './joke-teller-routing.module';



@NgModule({
  declarations: [
    JokeListComponent,
    JokeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokeTellerRoutingModule
  ],
  providers: [
    ApiService
  ]
})
export class JokeTellerModule { }
