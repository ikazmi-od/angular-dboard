import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-one',
  templateUrl: './widget-one.component.html',
  styleUrls: ['./widget-one.component.css']
})
export class WidgetOneComponent implements OnInit {
  looper: Array<number> = []

  constructor() { }

  ngOnInit(): void {
    for (let i=0; i< 10; i++){
      this.looper[i]=i;
    }
  }

}
