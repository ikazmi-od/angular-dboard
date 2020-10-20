import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-three></app-widget-three>
  `,
})
export class WidgetThreeContainer extends DashboardCardContainerComponent {}
