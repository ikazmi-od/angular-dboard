import { Component, OnInit } from '@angular/core';

import { DataPassingService } from '../../data-passing.service';

@Component({
  selector: 'app-widget-two',
  templateUrl: './widget-two.component.html',
  styleUrls: ['./widget-two.component.css']
})
export class WidgetTwoComponent implements OnInit {
  public value: string = 'abc';

  constructor(
    private dataPassingService: DataPassingService
  ) {}

  ngOnInit(): void {
    this.dataPassingService.timePeriod.subscribe(res=> {
      this.value=res;
    });
  }

}
