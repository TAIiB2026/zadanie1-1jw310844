import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneComponent } from './drone/drone.component';
import { PowiekszDirective } from './powieksz.directive';

@NgModule({
  declarations: [
    AppComponent,
    DroneComponent,
    PowiekszDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
