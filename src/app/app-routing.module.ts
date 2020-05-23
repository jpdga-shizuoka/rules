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
import { Rule803Component } from './rules/rule803.component';
import { Rule80301Component } from './rules/rule80301.component';
import { Rule80302Component } from './rules/rule80302.component';
import { Rule80303Component } from './rules/rule80303.component';
import { Rule804Component } from './rules/rule804.component';
import { Rule80401Component } from './rules/rule80401.component';
import { Rule80402Component } from './rules/rule80402.component';
import { Rule805Component } from './rules/rule805.component';
import { Rule80501Component } from './rules/rule80501.component';
import { Rule80502Component } from './rules/rule80502.component';
import { Rule80503Component } from './rules/rule80503.component';
import { Rule806Component } from './rules/rule806.component';
import { Rule80601Component } from './rules/rule80601.component';
import { Rule80602Component } from './rules/rule80602.component';
import { Rule80603Component } from './rules/rule80603.component';
import { Rule80604Component } from './rules/rule80604.component';
import { Rule80605Component } from './rules/rule80605.component';
import { Rule807Component } from './rules/rule807.component';
import { Rule808Component } from './rules/rule808.component';

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
  { path: '803', component: Rule803Component},
  { path: '80301', component: Rule80301Component},
  { path: '80302', component: Rule80302Component},
  { path: '80303', component: Rule80303Component},
  { path: '804', component: Rule804Component},
  { path: '80401', component: Rule80401Component},
  { path: '80402', component: Rule80402Component},
  { path: '805', component: Rule805Component},
  { path: '80501', component: Rule80501Component},
  { path: '80502', component: Rule80502Component},
  { path: '80503', component: Rule80503Component},
  { path: '806', component: Rule806Component},
  { path: '80601', component: Rule80601Component},
  { path: '80602', component: Rule80602Component},
  { path: '80603', component: Rule80603Component},
  { path: '80604', component: Rule80604Component},
  { path: '80605', component: Rule80605Component},
  { path: '807', component: Rule807Component},
  { path: '808', component: Rule808Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
