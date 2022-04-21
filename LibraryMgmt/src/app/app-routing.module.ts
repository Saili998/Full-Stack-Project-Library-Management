import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { UpdateComponent } from './update/update.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'services',component:ServicesComponent},
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  {path :'add-component', component:AddComponent},
  {path : 'delete-component', component:DeleteComponent},
  {path : 'fetch-component', component:FetchComponent},
  {path : 'update-component', component:UpdateComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ServicesComponent,SigninComponent,SigninComponent,HomeComponent,AboutComponent,AddComponent,DeleteComponent,FetchComponent,UpdateComponent,ContactComponent]