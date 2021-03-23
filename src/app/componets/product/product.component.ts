import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = [];
  dataLoaded = false;
  filterText:"";
  
  constructor(private productService:ProductService, 
              private activatedRoute:ActivatedRoute,
              private toastrService:ToastrService,
              private cartService:CartService
             ) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryID"]) {
        this.getProductsByCategory(params["categoryID"])
      }else{
        this.getProducts();
      }

    })
   
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products = response.entity
      this.dataLoaded = true;
    });
      
  }

  getProductsByCategory(categoryId:number){
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.entity
      this.dataLoaded = true;
    })
  }

  addToCart(product:Product){
    //  console.log(product);
    if (product.productID===1) {
      this.toastrService.error("Error","This product cannot be added to cart")
    }else{
      this.toastrService.success("added to cart", product.productName)
      this.cartService.addToCart(product);
    }
    
  }

}
