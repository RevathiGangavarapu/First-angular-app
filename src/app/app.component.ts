import { Component } from '@angular/core';
//import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public second1 = false;

  /*constructor(private data:DataService) { }
  * app:any;
  * second:any;

 * ngOnInit(){
 *   this.second = this.data.second;
  *}
 * ngOnDestroy(){
  * this.data.app = this.app;
  }*/
}
