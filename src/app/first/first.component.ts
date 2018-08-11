import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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

  public display = "agdyacvuydbefudy"

  secondpageclickenter(){
    this.third = true;
    this.first = false;
    this.second = false;
  }
  @Input() showvalueofparent:any;
 
}
