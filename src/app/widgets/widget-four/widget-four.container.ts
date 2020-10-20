import { Component } from '@angular/core';
import { DashboardCardContainerComponent } from '../../dashboard/dashboard-card.container/dashboard-card.container.component';

@Component({
  template: `
    <app-widget-four></app-widget-four>
  `,
})
export class WidgetFourContainer extends DashboardCardContainerComponent {}
