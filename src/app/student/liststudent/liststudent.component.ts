import { StudentService } from './../../shared/student.service';
import { ApifunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {

  allData :[];
  constructor(private serv :StudentService) {
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
