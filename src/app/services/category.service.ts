import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:26522/api/categories/getall"

  getCategories():Observable<ListResponseModel<Category>>{
   return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}
