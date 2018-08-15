import { Component, OnInit, OnDestroy, OnChanges, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';
//import { EventEmitter } from '../../../node_modules/protractor';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnChanges {
 @Input() rating: number;
 starwidth: number;
 @Output() ratingclicked: EventEmitter <string> = new EventEmitter<string>();

 ngOnChanges():void{
   this.starwidth = this.rating * 75 / 5;
 }
 
 onclick(): void{
   this.ratingclicked.emit ('The rating ${this.Rating} was clicked!')
 }
}
