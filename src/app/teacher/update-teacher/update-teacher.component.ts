import { TeacherService } from './../../shared/teacher.service';
import { teacher } from './../../models/teacher';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  errors;
  id;
object =new teacher;
  constructor(private serv:TeacherService ,private route : Router , private activeroute :ActivatedRoute) {
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
  this.route.navigateByUrl('lt');
})
  }
}
