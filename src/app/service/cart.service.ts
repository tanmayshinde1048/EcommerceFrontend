import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../modal/Modal';
import { Observable } from 'rxjs';



const NAME_KEY='NAME';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http : HttpClient) { }


  addCartTOUser(cart: Cart, idUser: number):Observable<Cart> 
  {
    return this.http.post<any>(`http://localhost:8082/api/addCartToUser/${idUser}`,cart);
  }

  removeFromCart(idCart: number, idUser: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8082/api/removeFromCart/${idCart}/${idUser}`); 
  }

 findCartById(id: number): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8082/api/findCartById/${id}`); 
  }
  
 deleteCart(id: number): Observable<Cart> {
    return this.http.delete<Cart>(`http://localhost:8082/api/deleteCart/${id}`); 
  }

  findCartsForUser(idUser: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`http://localhost:8082/api/findCartsForUser/${idUser}`); 
  }
  
 findByCartName(name: string): Observable<Cart> {
    return this.http.get<Cart>(`http://localhost:8082/api/findByCartName/${name}`); 
  }
  
saveCartName(name: string) {
   window.sessionStorage.removeItem( NAME_KEY);
   window.sessionStorage.setItem( NAME_KEY, name);
 }

 getCartName():string{
  return sessionStorage.getItem(NAME_KEY) || "";
 }

}
