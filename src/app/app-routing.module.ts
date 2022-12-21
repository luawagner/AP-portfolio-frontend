import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './components/education/new-educacion.component';
import { EditeducacionComponent } from './components/education/edit-educacion.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProjectComponent } from './components/myprojects/edit-project/edit-project.component';
import { NewProjectComponent } from './components/myprojects/new-project/new-project.component';
import { NewSkillComponent } from './components/skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevoproyecto', component: NewProjectComponent},
  {path: 'editarproyecto/:id', component: EditProjectComponent},
  {path: 'nuevaeducacion', component: NeweducacionComponent},
  {path: 'editareducacion/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editabout/:id', component: EditAboutComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
