import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  currentCategory: Category = {categoryID:1,categoryName:""};
  dataLoaded=false;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.entity
      this.dataLoaded=true;
    })
  }

  setCurrentCategory(category:Category){
    //console.log(category.categoryName);
    this.currentCategory=category;
  }
//***** */
  removeCurrentCategory(){
    // this.filterText = "";
    this.currentCategory = {categoryID:-1,categoryName:""};
  }

  getCurrentCategoryClass(category:Category){
    if (category == this.currentCategory) {
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }


 
  getAllCategoryClass(){
    let defaultCategory:Category={categoryID:-1,categoryName:""};
    if(this.currentCategory.categoryID==defaultCategory.categoryID){
      return "list-group-item active cursorPointer"
    } 
    else{
      return "list-group-item cursorPointer"
    }
  }

  

  

}
