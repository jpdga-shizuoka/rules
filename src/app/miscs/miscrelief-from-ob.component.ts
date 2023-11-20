import { Component } from '@angular/core';
import { MiscComponent } from './misc.component';
@Component({
  selector: 'app-misc-relief-from-ob',
  templateUrl: './relief-from-ob.html'
})
export class MiscRelieffromobComponent extends MiscComponent {
  get ruleId(): string { return 'relief-from-ob'; }
}
