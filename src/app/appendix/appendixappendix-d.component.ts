import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-d',
  templateUrl: './appendix-d.html'
})
export class AppendixAppendixdComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-d'; }
}
