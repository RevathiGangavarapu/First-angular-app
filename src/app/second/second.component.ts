import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnDestroy {

  constructor(private data:DataService) { }
  click:any;
  first:any;
  second:any;
  
  ngOnInit() {
    this.first = this.data.first;
    //this.click = this.data.click;
  }
  
  ngOnDestroy(){
    //this.data.second = this.second;
    this.data.click = this.click;
  }

}
