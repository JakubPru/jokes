import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { JokeListComponent } from './joke-list/joke-list.component';

const routes: Routes = [
  {
    path: 'category/:category',
    component: JokeDetailsComponent
  },
  {
    path: '',
    component: JokeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeTellerRoutingModule { }
