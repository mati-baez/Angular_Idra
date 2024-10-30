import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student = this.initializeStudent(); // Inicializamos `selectedStudent` usando una función
  
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  // Cargar lista de estudiantes
  loadStudents(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  // Seleccionar un estudiante para editar
  selectStudent(student: Student): void {
    this.selectedStudent = { ...student };
  }

  // Crear un nuevo estudiante
  createStudent(): void {
    if (this.isFormValid()) { // Validación del formulario
      this.studentService.createStudent(this.selectedStudent).subscribe((student) => {
        this.students.push(student);
        this.resetSelectedStudent();
      });
    }
  }

  // Actualizar un estudiante existente
  updateStudent(): void {
    if (this.selectedStudent && this.isFormValid()) { // Validación adicional
      this.studentService.updateStudent(this.selectedStudent.id, this.selectedStudent).subscribe((updatedStudent) => {
        const index = this.students.findIndex((s) => s.id === updatedStudent.id);
        if (index !== -1) {
          this.students[index] = updatedStudent;
        }
        this.resetSelectedStudent();
      });
    }
  }

  // Eliminar un estudiante
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students.filter((s) => s.id !== id);
    });
  }

  // Inicializar un estudiante vacío
  private initializeStudent(): Student {
    return { id: 0, firstName: '', lastName: '', email: '', address: '' };
  }

  // Resetear el formulario para crear un nuevo estudiante
  resetSelectedStudent(): void {
    this.selectedStudent = this.initializeStudent();
  }

  // Validación del formulario para asegurar que todos los campos estén completos
  private isFormValid(): boolean {
    return (
      this.selectedStudent.firstName.trim() !== '' &&
      this.selectedStudent.lastName.trim() !== '' &&
      this.selectedStudent.email.trim() !== '' &&
      this.selectedStudent.address.trim() !== ''
    );
  }
}
