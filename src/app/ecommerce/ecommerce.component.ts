import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../modal/Modal';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit{
  
  orderFinished = false;
  name: any;
  showSearch = false;
  products: Product[]=[];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;

  @ViewChild('productsC')
  productsC!: ProductsComponent;

  @ViewChild('shoppingCartC')
  shoppingCartC!: ShoppingCartComponent;

  @ViewChild('ordersC')
  ordersC!: OrdersComponent;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }

  finishOrder(orderFinished: boolean) {
    this.orderFinished = orderFinished;
  }

  reset() {
    this.orderFinished = false;
    this.productsC.reset();
    this.shoppingCartC.reset();
    this.ordersC.paid = false;
  }
  search() {
    this.productService.findByName(this.name).subscribe((products) => {
      this.products = products;
      this.showSearch = true;
    });
  }

  showUndoBtn(index:number) {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe((product) => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }

}
