import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendixf',
  templateUrl: './appendixf.html'
})
export class AppendixAppendixfComponent extends AppendixComponent {
  get ruleId(): string { return 'appendixf'; }
}
