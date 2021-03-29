import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl='https://localhost:26522/api/auth/'
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiurl+"login",loginModel);
  }

  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiurl+"register", registerModel)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }


}
