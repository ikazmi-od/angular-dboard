import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-five></app-widget-five>
  `,
})
export class WidgetFiveContainer extends DashboardCardContainerComponent {}
