import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'https://retoolapi.dev/8gjNpB/students';

  constructor(private http: HttpClient) { }

  // Obtener todos los estudiantes
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // Obtener un estudiante por ID
  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  // Crear un estudiante
  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // Actualizar un estudiante
  updateStudent(id: number, student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
  }

  // Eliminar un estudiante
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
