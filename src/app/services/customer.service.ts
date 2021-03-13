import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:26522/api/customers/getall"

 getCustomers():Observable<CustomerResponseModel>{
   return this.httpClient.get<CustomerResponseModel>(this.apiUrl)
 }
 


}
