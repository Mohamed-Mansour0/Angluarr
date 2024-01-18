import { student } from 'src/app/models/student';
import { HttpClient } from '@angular/common/http';
import { ApifunctionService } from 'src/app/shared/apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends ApifunctionService<student>{

  constructor(public http: HttpClient) {
    super("http://localhost:3000/student",http)
  }
}
