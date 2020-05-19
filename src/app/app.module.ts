import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Rule800Component } from './rules/rule800.component';
import { Rule801Component } from './rules/rule801.component';
import { Rule80101Component } from './rules/rule80101.component';
import { Rule80102Component } from './rules/rule80102.component';
import { Rule80103Component } from './rules/rule80103.component';

@NgModule({
  declarations: [
    AppComponent,
    Rule800Component,
    Rule801Component,
    Rule80101Component,
    Rule80102Component,
    Rule80103Component,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
