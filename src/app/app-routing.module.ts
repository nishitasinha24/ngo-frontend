import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { NgoComponent } from './ngo/ngo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NgoLoginComponent } from './ngo-login/ngo-login.component';
import { NgoRegisterComponent } from './ngo-register/ngo-register.component';
import { ChildComponent } from './child/child.component';
import { ChildListComponent } from './child-list/child-list.component';
import { ChildOptionsComponent } from './child-options/child-options.component';
import { NgoRequestListComponent } from './ngo-request-list/ngo-request-list.component';
import { NgoRequestDetailsComponent } from './ngo-request-details/ngo-request-details.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'faq' , component:FaqComponent},
  {path:'contact' , component:ContactComponent},
  {path:'help' , component:HelpComponent},
  {path:'parent' , component:ParentComponent},
  {path:'ngo' , component:NgoComponent},
  {path:'login' , component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ngologin', component:NgoLoginComponent},
  {path:'ngoregister', component:NgoRegisterComponent},
  {path:'child', component:ChildComponent},
  {path:'childlist', component:ChildListComponent},
  {path:'childoptions', component:ChildOptionsComponent},
  {path:'requestlist', component:NgoRequestListComponent},
  {path:'ngorequestdetails', component:NgoRequestDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AboutComponent, ContactComponent, FaqComponent, HelpComponent, HomeComponent, ParentComponent,NgoComponent,LoginComponent,RegisterComponent, NgoLoginComponent, 
  NgoRegisterComponent, ProfileComponent, ChildComponent, ChildListComponent, ChildOptionsComponent, NgoRequestListComponent, NgoRequestDetailsComponent];