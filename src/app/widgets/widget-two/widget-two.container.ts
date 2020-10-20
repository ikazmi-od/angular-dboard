import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-two></app-widget-two>
  `,
})
export class WidgetTwoContainer extends DashboardCardContainerComponent {}