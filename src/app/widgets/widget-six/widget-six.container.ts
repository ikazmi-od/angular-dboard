import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-six></app-widget-six>
  `,
})
export class WidgetSixContainer extends DashboardCardContainerComponent {}
