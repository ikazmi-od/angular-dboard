import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  AfterViewInit,
} from '@angular/core';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';

import { Columns } from '../models/columns';
import { Widget } from '../models/widget';

import { dashboardCards } from '../dashboard-cards';
import { DashboardCardContainerComponent } from '../dashboard-card.container/dashboard-card.container.component';
import { DashboardCards } from '../dashboard-cards.enum';

import { DataPassingService } from '../../data-passing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  columns: Array<Columns> = [
    {
      widgets: [
        {
          component: DashboardCards.WidgetOne,
          id: 'hello-world-1',
        },
        {
          component: DashboardCards.WidgetTwo,
          id: 'hello-world-2'
        }
      ]
    },
    {
      widgets: [
        {
          component: DashboardCards.WidgetThree,
          id: 'hello-world-1',
        },
        {
          component: DashboardCards.WidgetFour,
          id: 'hello-world-2'
        }
      ]
    },
    {
      widgets: [
        {
          component: DashboardCards.WidgetFive,
          id: 'hello-world-1',
        },
        {
          component: DashboardCards.WidgetSix,
          id: 'hello-world-2'
        }
      ]
    }
  ];

  widgets: Array<Widget> = [
    {
      component: DashboardCards.WidgetOne,
      id: 'hello-world-1',
    },
    {
      component: DashboardCards.WidgetTwo,
      id: 'hello-world-2'
    }
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private dataPassingService: DataPassingService
  ) {}

  ngOnInit() {
    this.shareData('xyz');
  }

  shareData(data){
    this.dataPassingService.sendData(data) // to send something
  }

  ngAfterViewInit() {
    this.loadContents();
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.widget);
    });
    this.cd.detectChanges();
  };

  loadContent = (template: DashboardOutletDirective, widget: Widget) => {
    if (!widget.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(dashboardCards[widget.component]);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as DashboardCardContainerComponent;
    instance.widget = widget;
  };
}
