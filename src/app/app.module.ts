import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherService } from './service/teacher.service';


@NgModule({
  declarations: [
    AppComponent,
    TeacherListComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
