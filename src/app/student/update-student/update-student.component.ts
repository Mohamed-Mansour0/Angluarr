import { StudentService } from './../../shared/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { ApifunctionService } from 'src/app/shared/apifunction.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {


  errors;
  id;
object =new student;
  constructor(private serv:StudentService ,private route : Router , private activeroute :ActivatedRoute) {
    this.id= this.activeroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.serv.getbyId(this.id).subscribe((data:any)=>{
      this.object= data;
    })
  }

  ngOnInit(): void {
  }


  update() {

this.serv.put(this.object,this.id).subscribe(data=>{
  this.route.navigateByUrl('ls');
})
  }

}


