import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrefacePrefaceComponent } from './prefaces/prefacepreface.component';
import { RuleIndexComponent } from './rules/ruleindex.component';
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
import { Rule809Component } from './rules/rule809.component';
import { Rule80901Component } from './rules/rule80901.component';
import { Rule80902Component } from './rules/rule80902.component';
import { Rule80903Component } from './rules/rule80903.component';
import { Rule810Component } from './rules/rule810.component';
import { Rule811Component } from './rules/rule811.component';
import { Rule812Component } from './rules/rule812.component';
import { Rule813Component } from './rules/rule813.component';
import { Rule81301Component } from './rules/rule81301.component';
import { Rule81302Component } from './rules/rule81302.component';
import { AppendixAppendixaComponent } from './appendix/appendixappendix-a.component';
import { AppendixAppendixbComponent } from './appendix/appendixappendix-b.component';
import { AppendixAppendixcComponent } from './appendix/appendixappendix-c.component';
import { AppendixAppendixdComponent } from './appendix/appendixappendix-d.component';
import { AppendixAppendixeComponent } from './appendix/appendixappendix-e.component';
import { AppendixAppendixfComponent } from './appendix/appendixappendix-f.component';
import { QaIndexComponent } from './qas/qaindex.component';
import { QaAppComponent } from './qas/qaapp.component';
import { QaThrComponent } from './qas/qathr.component';
import { QaTeeComponent } from './qas/qatee.component';
import { QaLieComponent } from './qas/qalie.component';
import { QaMarComponent } from './qas/qamar.component';
import { QaStaComponent } from './qas/qasta.component';
import { QaObsComponent } from './qas/qaobs.component';
import { QaManComponent } from './qas/qaman.component';
import { QaPosComponent } from './qas/qapos.component';
import { Qa2mComponent } from './qas/qa2m.component';
import { QaLosComponent } from './qas/qalos.component';
import { QaPutComponent } from './qas/qaput.component';
import { QaObComponent } from './qas/qaob.component';
import { QaCasComponent } from './qas/qacas.component';
import { QaHazComponent } from './qas/qahaz.component';
import { QaComComponent } from './qas/qacom.component';
import { QaScoComponent } from './qas/qasco.component';
import { QaAbaComponent } from './qas/qaaba.component';
import { QaProComponent } from './qas/qapro.component';
import { QaPraComponent } from './qas/qapra.component';
import { QaIntComponent } from './qas/qaint.component';
import { QaMisComponent } from './qas/qamis.component';
import { QaCouComponent } from './qas/qacou.component';
import { QaEquComponent } from './qas/qaequ.component';
import { QaMatComponent } from './qas/qamat.component';
import { QaDouComponent } from './qas/qadou.component';
import { QaCmpComponent } from './qas/qacmp.component';
import { MiscPenaltiesComponent } from './miscs/miscpenalties.component';
import { MiscObstaclesComponent } from './miscs/miscobstacles.component';
import { MiscReliefsComponent } from './miscs/miscreliefs.component';
import { MiscEnforcementComponent } from './miscs/miscenforcement.component';
import { MiscObhazardinboundsComponent } from './miscs/miscobhazardinbounds.component';
import { MiscMandatoryComponent } from './miscs/miscmandatory.component';
import { MiscRelieffromobComponent } from './miscs/miscrelief-from-ob.component';
import { MiscPostfaceComponent } from './miscs/miscpostface.component';

const routes: Routes = [
  { path: '', component: PrefacePrefaceComponent },
  { path: 'preface', pathMatch: 'full', redirectTo: '' },
  { path: 'index', component: RuleIndexComponent },
  { path: '800', component: Rule800Component },
  { path: '801', component: Rule801Component },
  { path: '80101', component: Rule80101Component },
  { path: '80102', component: Rule80102Component },
  { path: '80103', component: Rule80103Component },
  { path: '802', component: Rule802Component },
  { path: '80201', component: Rule80201Component },
  { path: '80202', component: Rule80202Component },
  { path: '80203', component: Rule80203Component },
  { path: '80204', component: Rule80204Component },
  { path: '80205', component: Rule80205Component },
  { path: '80206', component: Rule80206Component },
  { path: '80207', component: Rule80207Component },
  { path: '803', component: Rule803Component },
  { path: '80301', component: Rule80301Component },
  { path: '80302', component: Rule80302Component },
  { path: '80303', component: Rule80303Component },
  { path: '804', component: Rule804Component },
  { path: '80401', component: Rule80401Component },
  { path: '805', component: Rule805Component },
  { path: '80501', component: Rule80501Component },
  { path: '80502', component: Rule80502Component },
  { path: '80503', component: Rule80503Component },
  { path: '806', component: Rule806Component },
  { path: '80601', component: Rule80601Component },
  { path: '80602', component: Rule80602Component },
  { path: '80603', component: Rule80603Component },
  { path: '80604', component: Rule80604Component },
  { path: '80605', component: Rule80605Component },
  { path: '807', component: Rule807Component },
  { path: '808', component: Rule808Component },
  { path: '809', component: Rule809Component },
  { path: '80901', component: Rule80901Component },
  { path: '80902', component: Rule80902Component },
  { path: '80903', component: Rule80903Component },
  { path: '810', component: Rule810Component },
  { path: '811', component: Rule811Component },
  { path: '812', component: Rule812Component },
  { path: '813', component: Rule813Component },
  { path: '81301', component: Rule81301Component },
  { path: '81302', component: Rule81302Component },
  { path: 'qa-index', component: QaIndexComponent },
  { path: 'qa-app', component: QaAppComponent },
  { path: 'qa-thr', component: QaThrComponent },
  { path: 'qa-tee', component: QaTeeComponent },
  { path: 'qa-lie', component: QaLieComponent },
  { path: 'qa-mar', component: QaMarComponent },
  { path: 'qa-sta', component: QaStaComponent },
  { path: 'qa-obs', component: QaObsComponent },
  { path: 'qa-man', component: QaManComponent },
  { path: 'qa-pos', component: QaPosComponent },
  { path: 'qa-2m', component: Qa2mComponent },
  { path: 'qa-los', component: QaLosComponent },
  { path: 'qa-put', component: QaPutComponent },
  { path: 'qa-ob', component: QaObComponent },
  { path: 'qa-cas', component: QaCasComponent },
  { path: 'qa-haz', component: QaHazComponent },
  { path: 'qa-com', component: QaComComponent },
  { path: 'qa-sco', component: QaScoComponent },
  { path: 'qa-aba', component: QaAbaComponent },
  { path: 'qa-pro', component: QaProComponent },
  { path: 'qa-pra', component: QaPraComponent },
  { path: 'qa-int', component: QaIntComponent },
  { path: 'qa-mis', component: QaMisComponent },
  { path: 'qa-cou', component: QaCouComponent },
  { path: 'qa-equ', component: QaEquComponent },
  { path: 'qa-mat', component: QaMatComponent },
  { path: 'qa-dou', component: QaDouComponent },
  { path: 'qa-cmp', component: QaCmpComponent },
  { path: 'appendix-a', component: AppendixAppendixaComponent},
  { path: 'appendix-b', component: AppendixAppendixbComponent},
  { path: 'appendix-c', component: AppendixAppendixcComponent},
  { path: 'appendix-e', component: AppendixAppendixeComponent},
  { path: 'appendix-d', component: AppendixAppendixdComponent},
  { path: 'appendix-f', component: AppendixAppendixfComponent},
  { path: 'obstacles', component: MiscObstaclesComponent },
  { path: 'reliefs', component: MiscReliefsComponent },
  { path: 'penalties', component: MiscPenaltiesComponent },
  { path: 'enforcement', component: MiscEnforcementComponent },
  { path: 'obhazardinbounds', component: MiscObhazardinboundsComponent },
  { path: 'mandatory', component: MiscMandatoryComponent },
  { path: 'relief-from-ob', component: MiscRelieffromobComponent },  
  { path: 'postface', component: MiscPostfaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
