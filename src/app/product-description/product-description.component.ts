import { Component, OnInit } from '@angular/core';
import { ProductService } from "../product.service";
import { Album } from "../album";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],

})
export class ProductDescriptionComponent implements OnInit {
albumInfo:Album;
itemsPerPage:number=5;
page:number=1;
pagedData=[];
  constructor(private _productService: ProductService) {

     for (var index = 0; index < 100; index++) {
      this.pagedData.push(`Angular ${index}`);  
    }
   }

  ngOnInit() {
   
    this._productService.getAlbum(1).subscribe(response=>
    this.albumInfo=response
    );
  }

pageClicked(event){
  this.page=event;
console.log(event);
}
}
