import { Component } from '@angular/core';
import { MiscComponent } from './misc.component';
@Component({
  selector: 'app-misc-mandatory',
  templateUrl: './mandatory.html'
})
export class MiscMandatoryComponent extends MiscComponent {
  get ruleId(): string { return 'mandatory'; }
}
