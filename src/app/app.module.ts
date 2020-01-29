import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA}  from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import {MatDatepickerModule,MatNativeDateModule, MatInputModule} from '@angular/material';
import { NgoResponseComponent } from './ngo-response/ngo-response.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NgoResponseComponent
    
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
