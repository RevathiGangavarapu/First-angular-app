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
  imagewidth: number = 40;
  imagemargin: number = 1;
  showImage: boolean = false;
  Products: any[] = [
    {
    "ProductID": 1,
    "ProductName": "saree",
    "ProductCode": "JDK-3245",
    "ProductPrice": 20,
    "Rating": 4.2,
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91zc0CBnbLL._UY550_.jpg" 
    },

    {
      "ProductID": 2,
      "ProductName": "Dressmaterial",
      "ProductCode": "KSE-5454",
      "ProductPrice": 15,
      "Rating": 3,
      "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/91CXgTfuQcL._SY445_.jpg"
    }
  ];
      toggleImage(): void{
        this.showImage = !this.showImage;
      }

      onclicked(message: string): void{
        this.pagetitle = 'ProductList: ' + message;
      }
}
