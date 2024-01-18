import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { FooterComponent } from './sharedUi/footer/footer.component';
import { HeroComponent } from './sharedUi/hero/hero.component';
import { MainComponent } from './sharedUi/main/main.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { CreatstudentComponent } from './student/creatstudent/creatstudent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { CreatTeacherComponent } from './teacher/creat-teacher/creat-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    MainComponent,
    ListstudentComponent,
    CreatstudentComponent,
    NotFoundComponent,
    UpdateStudentComponent,
    CreatTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule,
  HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
