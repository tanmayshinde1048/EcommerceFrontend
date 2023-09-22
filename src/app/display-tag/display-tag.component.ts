import { Component, OnInit } from '@angular/core';
import { Product } from '../modal/Modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';
import { TagService } from '../service/tag.service';

@Component({
  selector: 'app-display-tag',
  templateUrl: './display-tag.component.html',
  styleUrls: ['./display-tag.component.css']
})
export class DisplayTagComponent implements OnInit {

  orderFinished = false;
  idTag: number=0;
  products: Product[] = [];
  product: Product = {} as Product;
  showBtn = -1;
  showMyContainerInfo = false;

  constructor(private route: ActivatedRoute, private productService: ProductService,
    private router: Router, private tagService: TagService) {
    this.route.params.subscribe(
      params => {
        this.idTag = this.route.snapshot.params['idTag'];
        this.tagService.findProductsForTag(this.idTag).subscribe(products => {
          this.products = products;
        }
        );
      }
    )
  }

  ngOnInit(): void {
  }
  showUndoBtn(index:number) {
    this.showBtn = index;
  }
  productInfo(id: number) {
    this.productService.findProductById(id).subscribe(product => {
      this.product = product;
    });
    this.showMyContainerInfo = !this.showMyContainerInfo;
  }
  sngleProduct(id: number) {
    this.router.navigate(['sangle/product', id]);
  }

}
