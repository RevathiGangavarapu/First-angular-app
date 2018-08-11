import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public second = true;
  public third = false;
  public first = false;
  public appVariable;

  secondpageclickenter(){
    this.third = true;
    this.first = false;
    this.second = false;
  }
/*constructor (private data:DataService){}
ngOnInit(){
  this.third = this.data.third;
}
ngOnDestroy(){
  this.data.second = this.second;
}*/
 
}
