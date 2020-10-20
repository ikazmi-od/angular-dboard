import { Directive, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDashboardOutlet]',
})
export class DashboardOutletDirective {
  @Input() widget;

  constructor(public viewContainerRef: ViewContainerRef) {}
}
