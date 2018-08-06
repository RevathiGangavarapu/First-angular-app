import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {

  constructor( private data:DataService) { }
  
  click:any;
  first:any;
  second:any;

  ngOnInit() {
    this.second = this.data.second;
    //this.click = this.data.click;
  }
  ngOnDestroy(){
    //this.data.first = this.first;
    this.data.click = this.click;
  }
}
