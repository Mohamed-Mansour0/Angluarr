import { TeacherService } from './../../shared/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {


  allData :[];
  constructor(private serv :TeacherService) {
    this.serv.get().subscribe((data :any)=>{
      this.allData=data;
    })
   }

   remove($id){
    this.serv.delete($id).subscribe(data=>{
      location.reload();
    })
   }

}
