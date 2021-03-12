import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { CategoryResponseModel } from '../models/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:26522/api/categories/getall"

  getCategories():Observable<CategoryResponseModel>{
   return this.httpClient.get<CategoryResponseModel>(this.apiUrl);
  }
}
