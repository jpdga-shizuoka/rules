import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Rule800Component } from './rules/rule800.component';
import { Rule801Component } from './rules/rule801.component';
import { Rule80101Component } from './rules/rule80101.component';
import { Rule80102Component } from './rules/rule80102.component';
import { Rule80103Component } from './rules/rule80103.component';
import { Rule802Component } from './rules/rule802.component';
import { Rule80201Component } from './rules/rule80201.component';
import { Rule80202Component } from './rules/rule80202.component';
import { Rule80203Component } from './rules/rule80203.component';
import { Rule80204Component } from './rules/rule80204.component';
import { Rule80205Component } from './rules/rule80205.component';
import { Rule80206Component } from './rules/rule80206.component';
import { Rule80207Component } from './rules/rule80207.component';

const routes: Routes = [
  { path: '800', component: Rule800Component},
  { path: '801', component: Rule801Component},
  { path: '80101', component: Rule80101Component},
  { path: '80102', component: Rule80102Component},
  { path: '80103', component: Rule80103Component},
  { path: '802', component: Rule802Component},
  { path: '80201', component: Rule80201Component},
  { path: '80202', component: Rule80202Component},
  { path: '80203', component: Rule80203Component},
  { path: '80204', component: Rule80204Component},
  { path: '80205', component: Rule80205Component},
  { path: '80206', component: Rule80206Component},
  { path: '80207', component: Rule80207Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
