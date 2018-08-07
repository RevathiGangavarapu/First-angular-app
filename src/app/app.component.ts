import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
//variable declaration
  public second = false;
  public third = false;
  public first = true;
  app:string;
  app1:string;
  app2:string;

  //method declaration
  firstpageclick(){
    this.second = true;
    this.third = false;
    this.first = false;
    //this.app2 = this.app;
  }    

  secondpageclick(){
    this.third = true;
    this.first = false;
    this.second = false;
    //this.app = this.app1;
  }

  thirdpageclick(){
    this.first = true;
    this.second = false;
    this.third = false;
    //this.app1 = this.app2;
  }

  /*constructor(private data:DataService) { }
  ngOnInit(){
    this.app1 = this.data.app;
    this.app2 = this.data.app1;
    this.app = this.data.app2;
  }*/
  /* app:any;
  * second:any;

  *ngOnInit(){
 *   this.second = this.data.second;
  *}
 *ngOnDestroy(){
  *this.data.app = this.app1;
  }*/
}
