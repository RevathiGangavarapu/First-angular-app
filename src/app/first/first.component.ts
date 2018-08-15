import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  title: string = "BIBA Designer Costumes";
  pagetitle: string = "ProductList";
  showImage: boolean = false;
  Products: any[] = [
    {
    "ProductID": 1,
    "ProductName": "saree",
    "ProductCode": "JDK-3245",
    "ProductPrice": 20,
    "Rating": 4.2,
    "imageUrl":"https://www.sareeo.clothing/attractive-multicolor-designer-satin-silk-saree-67611.html" 
    },

    {
      "ProductID": 2,
      "ProductName": "Dressmaterial",
      "ProductCode": "KSE-5454",
      "ProductPrice": 15,
      "Rating": 3
    }
  ];
      toggleImage(): void{
        this.showImage = !this.showImage;
      }

      onclicked(message: string): void{
        this.pagetitle = 'ProductList: ' + message;
      }
}
