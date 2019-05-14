import { Component, OnInit } from '@angular/core';
import {Student,STUDENT} from '../student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  students:Student[];
  
  constructor() {
    this.students=STUDENT;
   }

  ngOnInit() {
  }

 
}
