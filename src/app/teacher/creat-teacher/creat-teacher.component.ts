import { TeacherService } from './../../shared/teacher.service';
import { teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creat-teacher',
  templateUrl: './creat-teacher.component.html',
  styleUrls: ['./creat-teacher.component.css']
})
export class CreatTeacherComponent implements OnInit {

  errors;
  object = new teacher;
    constructor(private serv:TeacherService ,private route : Router) { }

    ngOnInit(): void {
    }


    save(teacherenName,teacherCourse,teacherage) {
      if(teacherenName.errors==null && teacherCourse.errors==null && teacherage.errors==null){
        this.serv.post(this.object).subscribe(data =>{
          this.route.navigateByUrl("lt");


          });

      } else{ this.errors="You must enter data"

      }

    }
}
