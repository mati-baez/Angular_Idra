import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './service/student.service';

@NgModule({
  declarations: [AppComponent, StudentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [StudentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
