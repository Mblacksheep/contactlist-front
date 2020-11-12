import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BalancedBracketsComponent } from './balanced-brackets/balanced-brackets.component';
import { PeopleCreateModalContent } from './people-create-modal/people-create-modal.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateModalContent } from './contact-create-modal/contact-create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PeopleListComponent,
    BalancedBracketsComponent,
    PeopleCreateModalContent,
    ContactListComponent,
    ContactCreateModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
