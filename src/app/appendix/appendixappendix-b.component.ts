import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-b',
  templateUrl: './appendix-b.html'
})
export class AppendixAppendixbComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-b'; }
}
