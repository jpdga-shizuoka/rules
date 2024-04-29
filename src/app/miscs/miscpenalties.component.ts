import { Component } from '@angular/core';
import { MiscComponent } from './misc.component';
@Component({
  selector: 'app-misc-penalties',
  templateUrl: './penalties.html'
})
export class MiscPenaltiesComponent extends MiscComponent {
  get ruleId(): string { return 'penalties'; }
}
