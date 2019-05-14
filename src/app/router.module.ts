import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent,  childroutes } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentUserComponent } from './student-user/student-user.component';
import { StudentOtherComponent } from './student-other/student-other.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoggedInGuard } from './loggedin.guard';


const routes : Routes = [
 {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'home',component:HomeComponent,children:childroutes},
 {path:'about',component:AboutComponent},
 {path:'login',component:LoginFormComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    AboutComponent,
    StudentListComponent,
    StudentUserComponent,
    StudentOtherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggedInGuard],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule { }

