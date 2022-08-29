import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-node-frontend';

  name :string ="";
  names:any[] =[];
  constructor(private productService: ProductService){}

  ngOnInit(): void {

    this.productService.getProduct().subscribe((res:any)=>{
      this.names = res.data;
    })



  }

  addProduct(): void {
    const payload = {name: this.name}
    this.productService.postProduct(payload).subscribe( (res:any)=>{
      if( res['status']){
        this.ngOnInit();
      }
    })
  }
}
