import { UpdateTeacherComponent } from './teacher/update-teacher/update-teacher.component';
import { CreatTeacherComponent } from './teacher/creat-teacher/creat-teacher.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { UpdateStudentComponent } from './student/update-student/update-student.component';
import { FooterComponent } from './sharedUi/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreatstudentComponent } from './student/creatstudent/creatstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { MainComponent } from './sharedUi/main/main.component';
import { HeroComponent } from './sharedUi/hero/hero.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component:HeroComponent},
{path:"hero", component:HeroComponent},
{path:"main", component:MainComponent},
{path:"footer", component:FooterComponent},
{path:"ls", component:ListstudentComponent},
{path:"cs", component:CreatstudentComponent},
{path:"us/:id", component:UpdateStudentComponent},
{path:"lt", component:ListTeacherComponent},
{path:"ct", component:CreatTeacherComponent},
{path:"ut/:id", component:UpdateTeacherComponent},
{path:"**", component:NotFoundComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
