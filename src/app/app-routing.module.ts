import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {
  path:'', component: LandingpageComponent
  },
  {
    path:'Departments', component: DepartmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
