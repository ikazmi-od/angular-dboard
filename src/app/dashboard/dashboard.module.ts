import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { DashboardCardContainerComponent } from './dashboard-card.container/dashboard-card.container.component';
import { MatCardModule } from '@angular/material/card';
// import { DashboardCard, DashboardCardContainerComponent } from './dashboard-card.container/dashboard-card.container.component';

@NgModule({
  declarations: [DashboardComponent, DashboardOutletDirective, DashboardCardContainerComponent, DashboardCardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
