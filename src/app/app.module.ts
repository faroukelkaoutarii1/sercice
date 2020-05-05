import { CoursesComponent } from './courses.component';
import { PostService } from './services/post.service';
// import { CoursesComponent } from './Courses.Component';
import { BrowserModule } from '@angular/platform-browser';


import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http'

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule , Routes } from "@angular/router";

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CousesService } from './courses.service';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavooComponent } from './favoo/favoo.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes : Routes = [
  {
    path: "home",
  component: HomeComponent
  },
  {
    path: "postes",
    component: PostsComponent
  },
  {
    path: "course",
    component: CoursesComponent
  },
  {
    path: "**",component: PageNotFoundComponent},
]

@NgModule({
  declarations:[
    AppComponent,
    CourseComponent,
    FavoriteComponent,
    FavooComponent,
    PanelComponent,
    ContactFormComponent,
    SignupFormComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CousesService, EmailService , PostService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
