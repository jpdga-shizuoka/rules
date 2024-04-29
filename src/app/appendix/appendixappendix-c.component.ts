import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-c',
  templateUrl: './appendix-c.html'
})
export class AppendixAppendixcComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-c'; }
}
