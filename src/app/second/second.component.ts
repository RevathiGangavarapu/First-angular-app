import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  public second = false;
  public third = true;
  public first = false;

  thirdpageclickenter(){
    this.first = true;
    this.third = false;
    this.second = false;
  }
/*constructor (private data:DataService){}
ngOnInit(){
  this.first = this.data.first;
}
ngOnDestroy(){
  this.data.third = this.third;
}*/
 
}
