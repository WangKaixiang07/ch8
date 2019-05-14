import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { StudentListComponent } from '../student-list/student-list.component';
import { StudentUserComponent } from '../student-user/student-user.component';
import { StudentOtherComponent } from '../student-other/student-other.component';
import { AuthService } from '../auth.service';


export const childroutes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  { path: 'list', component: StudentListComponent},
  { path: 'user', component: StudentUserComponent },
  { path: 'other', component: StudentOtherComponent }

];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuIndex = 2;
  constructor(private router:Router,private auth:AuthService) {

   }

  ngOnInit() {
  }
  menuClicked(index) {
    this.menuIndex = index;
    if(index == 1){
      this.router.navigate(['/home/user']);
    }
    else if(index == 2){
      this.router.navigate(['/home/list']);
    }
    else if(index == 3){
      this.auth.logout();
      this.router.navigate(['/login']);

    }
  }
}
