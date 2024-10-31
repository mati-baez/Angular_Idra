import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'https://retoolapi.dev/3qWDfZ/students';

  constructor(private http: HttpClient) { }

  // Función para normalizar los datos de los estudiantes
  private normalizeStudentData(student: any): Student {
    return {
      id: student.id,
      firstName: student['First Name'] || student.firstName,
      lastName: student['Last Name'] || student.lastName,
      email: student.Email || student.email,
      address: student.Address || student.address
    };
  }

  // Obtener todos los estudiantes y normalizar los datos
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl).pipe(
      map(students => students.map(student => this.normalizeStudentData(student))),
      catchError(this.handleError)
    );
  }

  // Obtener un estudiante por ID
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
      map(student => this.normalizeStudentData(student)), // Normalizar el estudiante individual
      catchError(this.handleError)
    );
  }

  // Crear un estudiante
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar un estudiante
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un estudiante
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    console.error('Ocurrió un error:', error);
    return throwError('Error en la solicitud HTTP. Por favor, intenta nuevamente.');
  }
}
