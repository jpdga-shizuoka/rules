import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-a',
  templateUrl: './appendix-a.html'
})
export class AppendixAppendixaComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-a'; }
}
