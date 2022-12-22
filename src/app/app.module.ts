import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { EducacionComponent } from './components/education/educacion.component';
import { MyprojectsComponent } from './components/myprojects/myprojects.component';
import { RedesComponent } from './components/redes/redes.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor.service';
import { NewProjectComponent } from './components/myprojects/new-project/new-project.component';
import { EditProjectComponent } from './components/myprojects/edit-project/edit-project.component';
import { NeweducacionComponent } from './components/education/new-educacion.component';
import { EditeducacionComponent } from './components/education/edit-educacion.component';
import { SkillComponent } from './components/skill/skill.component';
import { NewSkillComponent } from './components/skill/new-skill.component';
import { EditSkillComponent } from './components/skill/edit-skill.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducacionComponent,
    MyprojectsComponent,
    RedesComponent,
    SaludoComponent,
    HomeComponent,
    LoginComponent,
    NewProjectComponent,
    EditProjectComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    SkillComponent,
    NewSkillComponent,
    EditSkillComponent,
    EditAboutComponent,

  ],
  imports: [
    NgCircleProgressModule.forRoot({}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
/*     provideFirebaseApp(() => initializeApp(environment.firebase)),
 */    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
