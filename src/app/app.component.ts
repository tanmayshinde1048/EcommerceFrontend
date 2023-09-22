import { Component, OnInit } from '@angular/core';
import { Category, User } from './modal/Modal';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from './service/user.service';
import { CategoryService } from './service/category.service';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  user: User = {} as User;
  categories: Category[] = [];

  constructor(public dialog: MatDialog, private userService: UserService ,private categoryService: CategoryService) {
    this.userService.findByUsername(userService.getUsername()).subscribe(user => {
      this.user = user;
    })
    
  }
  ngOnInit(): void {
    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }


  login() {
    this.dialog.open(LoginComponent);
  }


  
}
