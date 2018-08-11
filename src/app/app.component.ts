import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//variable declaration
  display =" value ";
  
  public second = false;
  public third = false;
  public first = true;
  
  //method declaration
  firstpageclickenter(){
    this.second = true;
    this.third = false;
    this.first = false;
  }    
/*constructor (private data:DataService){}
ngOnInit(){
  this.second = this.data.second;
}
ngOnDestroy(){
  this.data.first = this.first;
}*/
}

