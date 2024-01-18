import { HttpClient } from '@angular/common/http';
import { teacher } from './../models/teacher';
import { ApifunctionService } from 'src/app/shared/apifunction.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends ApifunctionService<teacher> {

  constructor(http: HttpClient) {
    super("http://localhost:3000/teacher",http) }
}
