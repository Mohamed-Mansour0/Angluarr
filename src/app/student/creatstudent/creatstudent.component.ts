import { StudentService } from './../../shared/student.service';
import { student } from './../../models/student';
import { ApifunctionService } from './../../shared/apifunction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creatstudent',
  templateUrl: './creatstudent.component.html',
  styleUrls: ['./creatstudent.component.css']
})

export class CreatstudentComponent implements OnInit {

  errors;
object = new student;
  constructor(private serv:StudentService ,private route : Router) { }

  ngOnInit(): void {
  }


  save(studentName,studentLevel,studentage) {
    if(studentName.errors==null && studentLevel.errors==null && studentage.errors==null){
      this.serv.post(this.object).subscribe(data =>{
        this.route.navigateByUrl("ls");


        });

    } else{ this.errors="You must enter data"

    }

  }

}
