import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product, ProductOrder, ProductOrders } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = "/api/orders";
  private productOrder: ProductOrder;
  private orders: ProductOrders = new ProductOrders();

  private productOrderSubject = new Subject<ProductOrder>();
  private ordersSubject = new Subject<ProductOrders>();
  private totalSubject = new Subject<number>();

  private total: number=0;

  ProductOrderChanged = this.productOrderSubject.asObservable();
  OrdersChanged = this.ordersSubject.asObservable();
  TotalChanged = this.totalSubject.asObservable();

  constructor(private http: HttpClient) {
    const product: Product = {
      name: 'Default Product' // Replace with actual product data
      ,
      id: 0,
      description: '',
      pictureUrl: '',
      price: 0
    };

    this.productOrder = new ProductOrder(product, 1);
   
  }

  saveOrder(order: ProductOrders) {
    return this.http.post(this.ordersUrl, order);
  }

  set SelectedProductOrder(value: ProductOrder) {
    this.productOrder = value;
    this.productOrderSubject.next(value); // Pass the new value
  }

  get SelectedProductOrder() {
    return this.productOrder;
  }

  set ProductOrders(value: ProductOrders) {
    this.orders = value;
    this.ordersSubject.next(value); // Pass the new value
  }

  get ProductOrders() {
    return this.orders;
  }

  get Total() {
    return this.total;
  }

  set Total(value: number) {
    this.total = value;
    this.totalSubject.next(value); // Pass the new value
  }
}
