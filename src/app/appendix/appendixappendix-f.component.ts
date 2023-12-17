import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-f',
  templateUrl: './appendix-f.html'
})
export class AppendixAppendixfComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-f'; }
}
