import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

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
import { ServiceWorkerModule } from '@angular/service-worker';
import { PullToJumpComponent } from './pull-to-jump/pull-to-jump.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PrefacePrefaceComponent,
    RuleIndexComponent,
    Rule800Component,
    Rule801Component,
    Rule80101Component,
    Rule80102Component,
    Rule80103Component,
    Rule802Component,
    Rule80201Component,
    Rule80202Component,
    Rule80203Component,
    Rule80204Component,
    Rule80205Component,
    Rule80206Component,
    Rule80207Component,
    Rule803Component,
    Rule80301Component,
    Rule80302Component,
    Rule80303Component,
    Rule804Component,
    Rule80401Component,
    Rule805Component,
    Rule80501Component,
    Rule80502Component,
    Rule80503Component,
    Rule806Component,
    Rule80601Component,
    Rule80602Component,
    Rule80603Component,
    Rule80604Component,
    Rule80605Component,
    Rule807Component,
    Rule808Component,
    Rule809Component,
    Rule80901Component,
    Rule80902Component,
    Rule80903Component,
    Rule810Component,
    Rule811Component,
    Rule812Component,
    Rule813Component,
    Rule81301Component,
    Rule81302Component,
    AppendixAppendixaComponent,
    AppendixAppendixbComponent,
    AppendixAppendixcComponent,
    AppendixAppendixdComponent,
    AppendixAppendixeComponent,
    AppendixAppendixfComponent,
    QaIndexComponent,
    QaAppComponent,
    QaThrComponent,
    QaTeeComponent,
    QaLieComponent,
    QaMarComponent,
    QaStaComponent,
    QaObsComponent,
    QaManComponent,
    QaPosComponent,
    Qa2mComponent,
    QaLosComponent,
    QaPutComponent,
    QaObComponent,
    QaCasComponent,
    QaComComponent,
    QaScoComponent,
    QaAbaComponent,
    QaProComponent,
    QaPraComponent,
    QaIntComponent,
    QaMisComponent,
    QaCouComponent,
    QaEquComponent,
    QaMatComponent,
    QaDouComponent,
    QaCmpComponent,
    MiscPenaltiesComponent,
    MiscObstaclesComponent,
    MiscReliefsComponent,
    MiscEnforcementComponent,
    MiscObhazardinboundsComponent,
    MiscMandatoryComponent,
    MiscRelieffromobComponent,
    MiscPostfaceComponent,
    PullToJumpComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
