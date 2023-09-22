import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{

  category: Category = {} as Category;
  progressBar = false;

  constructor( private categoryService: CategoryService,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if (this.data.idCategory != null) {
      this.categoryService.findCategoryById(this.data.idCategory).subscribe(category => {
        this.category = category;
      })
    }
  }
  addCategory() {
    this.progressBar = true;
    if (this.data.idCategory != null) {
      this.categoryService.editCategory(this.category, this.data.idCategory).subscribe(category => {
        this.category = category;
        window.location.reload();
      })
    } else {
      this.categoryService.addCategoryToUser(this.category, this.data.idUser).subscribe(category => {
        this.category = category;
        window.location.reload();
      })
    }
  }

}
