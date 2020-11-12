import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleCreateComponent } from './people-create/people-create.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  { path: 'people/list', component: PeopleListComponent },
  { path: 'people/create', component: PeopleCreateComponent },
  { path: 'balanced-brackets', component: PeopleCreateComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
