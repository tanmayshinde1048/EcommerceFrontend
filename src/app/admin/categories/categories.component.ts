import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Category, Product, Tag, User,Comment } from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';
import { CommentService } from 'src/app/service/comment.service';
import { ProductService } from 'src/app/service/product.service';
import { TagService } from 'src/app/service/tag.service';
import { UserService } from 'src/app/service/user.service';
import { AddTagToProductComponent } from '../add-tag-to-product/add-tag-to-product.component';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  products: Product[]=[];
  user: User = {} as User;
 category: Category = {} as Category;
  idCategory: number=0;
  panelOpenState: boolean=false;
  tags: Tag[]=[];
  comments: Comment[]=[];

  constructor(private productService: ProductService, private categoryService: CategoryService,
    private route: ActivatedRoute, private dialog: MatDialog, private userService: UserService,
     private tagService: TagService, private commentService: CommentService) {
    this.route.params.subscribe(
      params => {
        this.idCategory = this.route.snapshot.params['idCategory'];
        this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
          this.category = category;
          this.productService.findProductsForCategory(this.idCategory).subscribe(products => {
            this.products = products;
          });
        })
        this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
          this.user = user;
        })
        this.commentService.findAllComments().subscribe(comments => {
          this.comments= comments;
        })
      }
    )
  }
  
  ngOnInit(): void { }
 
   addTag(idProduct:number) {
    this.dialog.open(AddTagToProductComponent, {
      data: { idProduct }
    })
  }
  showTags(idProduct:number) {
    this.tagService.findTagsForProduct(idProduct).subscribe(tags => {
      this.tags = tags;
    })
  }
  deleteCategory(idCategory:number, idUser:number) {
     if (confirm("Are you sure")) {
      this.categoryService.deleteCategory(idCategory).subscribe(() => {
      window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editCategory(idCategory:number) {
    this.dialog.open(AddCategoryComponent, {
    data: { idCategory }
    })
  }
  deleteProduct(idProduct:number, idUser:number) {
      if (confirm("Are you sure")) {
      this.productService.deleteProduct(idProduct).subscribe(() => {
      window.location.replace(`/profile/${idUser}`)
      })
    }
  }
  editProduct(idProduct:number) {
    this.dialog.open(AddProductComponent, {
    data: { idProduct }
    })
  }
  deleteComment(id:number) {
    this.commentService.deleteComment(id).subscribe(() => {
    window.location.reload();
    })
  }

}
