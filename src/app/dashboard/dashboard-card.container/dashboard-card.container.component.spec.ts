import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCard.ContainerComponent } from './dashboard-card.container.component';

describe('DashboardCard.ContainerComponent', () => {
  let component: DashboardCard.ContainerComponent;
  let fixture: ComponentFixture<DashboardCard.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCard.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCard.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
