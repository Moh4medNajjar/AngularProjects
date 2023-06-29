import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { MidWidgetsComponent } from './mid-widgets/mid-widgets.component';
import { BottomWidgetsComponent } from './bottom-widgets/bottom-widgets.component';
import { ChartModule } from 'angular-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HeaderComponent,
    MainComponent,
    TopWidgetsComponent,
    MidWidgetsComponent,
    BottomWidgetsComponent
  ],
  imports: [
    ChartModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
