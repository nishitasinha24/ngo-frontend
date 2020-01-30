import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA}  from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import {MatDatepickerModule,MatNativeDateModule, MatInputModule} from '@angular/material';
import { NgoResponseComponent } from './ngo-response/ngo-response.component';
import { ParentDeleteComponent } from './parent-delete/parent-delete.component';
import { NgoDeleteComponent } from './ngo-delete/ngo-delete.component';
import { ParentRequestListComponent } from './parent-request-list/parent-request-list.component';
import { ParentRequestDetailsComponent } from './parent-request-details/parent-request-details.component';
import { ParentLogoutComponent } from './parent-logout/parent-logout.component';
import { NgoLogoutComponent } from './ngo-logout/ngo-logout.component';
import { FinalAdoptionStatusComponent } from './final-adoption-status/final-adoption-status.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ParentRequestListComponent,
    ParentRequestDetailsComponent,
    ParentLogoutComponent,
    NgoLogoutComponent,
    FinalAdoptionStatusComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [UserService,HttpClient],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
