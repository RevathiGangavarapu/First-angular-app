import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnChanges {
 @Input() rating: number;
 starwidth: number;

 ngOnChanges():void{
   this.starwidth = this.rating * 75 / 5;
 }
 
}
