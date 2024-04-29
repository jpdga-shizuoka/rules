import { Component } from '@angular/core';
import { AppendixComponent } from './appendix.component';
@Component({
  selector: 'app-appendix-appendix-e',
  templateUrl: './appendix-e.html'
})
export class AppendixAppendixeComponent extends AppendixComponent {
  get ruleId(): string { return 'appendix-e'; }
}
