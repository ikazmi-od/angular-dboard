import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WidgetOneContainer } from './widgets/widget-one/widget-one.container';
import { WidgetOneComponent } from './widgets/widget-one/widget-one.component';

import { WidgetTwoContainer } from './widgets/widget-two/widget-two.container';
import { WidgetTwoComponent } from './widgets/widget-two/widget-two.component';

import { WidgetThreeContainer } from './widgets/widget-three/widget-three.container';
import { WidgetThreeComponent } from './widgets/widget-three/widget-three.component';

import { WidgetFourContainer } from './widgets/widget-four/widget-four.container';
import { WidgetFourComponent } from './widgets/widget-four/widget-four.component';

import { WidgetFiveContainer } from './widgets/widget-five/widget-five.container';
import { WidgetFiveComponent } from './widgets/widget-five/widget-five.component';

import { WidgetSixContainer } from './widgets/widget-six/widget-six.container';
import { WidgetSixComponent } from './widgets/widget-six/widget-six.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetOneContainer,
    WidgetOneComponent,

    WidgetTwoContainer,
    WidgetTwoComponent,

    WidgetThreeContainer,
    WidgetThreeComponent,

    WidgetFourContainer,
    WidgetFourComponent,

    WidgetFiveContainer,
    WidgetFiveComponent,

    WidgetSixContainer,
    WidgetSixComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
