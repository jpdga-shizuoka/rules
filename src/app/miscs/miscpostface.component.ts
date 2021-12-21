import { Component } from '@angular/core';
import { MiscComponent } from './misc.component';
@Component({
  selector: 'app-misc-postface',
  templateUrl: './postface.html'
})
export class MiscPostfaceComponent extends MiscComponent {
  get ruleId(): string { return 'postface'; }
}
