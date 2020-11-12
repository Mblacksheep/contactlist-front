import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalancedBracketsComponent } from './balanced-brackets/balanced-brackets.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  { path: 'people/list', component: PeopleListComponent },
  { path: 'contacts/list', component: ContactListComponent },
  { path: 'balanced-brackets', component: BalancedBracketsComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
