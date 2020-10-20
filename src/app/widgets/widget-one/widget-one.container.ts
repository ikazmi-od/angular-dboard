import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-one></app-widget-one>
  `,
})
export class WidgetOneContainer extends DashboardCardContainerComponent {}