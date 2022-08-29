import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getData = `${environment.baseUrl}${environment.routes.getData.endpoint}`;
  postDataURL = `${environment.baseUrl}${environment.routes.postData.endpoint}`;

  constructor( private http : HttpClient ) {
   }


   getProduct(){
    return this.http.get(this.getData);
   }

   postProduct(data:any){
    return this.http.post(this.postDataURL , data );
   }
}
