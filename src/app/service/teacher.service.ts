import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private apiUrl = 'https://97mm2.sse.codesandbox.io/teachers';  
  constructor(private http: HttpClient) {}

  // Obtener todos los teachers
  getTeachers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Obtener un teacher por ID
  getTeacher(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo teacher
  addTeacher(teacher: any): Observable<any> {
    return this.http.post(this.apiUrl, teacher);
  }

  // Actualizar un teacher
  updateTeacher(id: number, teacher: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, teacher);
  }

  // Eliminar un teacher
  deleteTeacher(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}