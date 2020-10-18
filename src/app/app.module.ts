import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeResumeComponent } from './home-resume/home-resume.component';
import { ResumeComponent } from './home-resume/resume/resume.component';
import { BackgroundComponent } from './background/background.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './home-resume/about/about.component';
import { ExProjectComponent } from './home-resume/ex-project/ex-project.component';
import { ContactComponent } from './home-resume/contact/contact.component';

const routes: Routes =[
{path:'',component:BackgroundComponent,children:[
  {path:'',component:HomeResumeComponent},
  {path:'resume',component:ResumeComponent }
],}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeResumeComponent,
    ResumeComponent,
    BackgroundComponent,
    AboutComponent,
    ExProjectComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
