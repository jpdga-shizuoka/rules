import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rule800Component } from './rules/rule800.component';
import { Rule801Component } from './rules/rule801.component';
import { Rule80101Component } from './rules/rule80101.component';
import { Rule80102Component } from './rules/rule80102.component';
import { Rule80103Component } from './rules/rule80103.component';

const routes: Routes = [
  { path: '800', component: Rule800Component},
  { path: '801', component: Rule801Component},
  { path: '80101', component: Rule80101Component},
  { path: '80102', component: Rule80102Component},
  { path: '80103', component: Rule80103Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
