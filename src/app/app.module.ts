import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { IotComponent } from './iot/iot.component';
import { InnovComponent } from './innov/innov.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustomerPipe } from './customer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    IotComponent,
    InnovComponent,
    DemopipeComponent,
    CustomerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
