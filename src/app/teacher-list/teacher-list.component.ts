import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../service/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})

export class TeacherListComponent implements OnInit {
  teachers: any[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;  // Asignar la respuesta a la variable teachers
      },
      (error) => {
        console.error('Error al cargar los profesores', error);
      }
    );
  }
}
