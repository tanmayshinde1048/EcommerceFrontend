import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart, Category } from '../modal/Modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  addCategoryToUser(category: Category, idUser: number):Observable<Cart>
  {
    return this.http.post<any>(`http://localhost:8082/api/addCategoryToUser/${idUser}`,category);
  }

  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.post<Category>(`http://localhost:8082/api/editCategory/${id}`, category); 
  }

  findCategoryById(id: number): Observable<Category> {
     return this.http.get<Category>(`http://localhost:8082/api/findCategoryById/${id}`); 
   }
   
  deleteCategory(id: number): Observable<Category> {
     return this.http.delete<Category>(`http://localhost:8082/api/deleteCategory/${id}`); 
   }

   findCategoriesForUser(idUser: number): Observable<Category[]> {
     return this.http.get<Category[]>(`http://localhost:8082/api/findCategoriesForUser/${idUser}`); 
   }
   
   findAllCategories(): Observable<Category[]> {
     return this.http.get<Category[]>(`http://localhost:8082/api/findAllCategories/`); 
   }

}
