import { Component } from '@angular/core';
import { PrefaceComponent } from './preface.component';
@Component({
  selector: 'app-preface-preface',
  templateUrl: './preface.html'
})
export class PrefacePrefaceComponent extends PrefaceComponent {
  get ruleId(): string { return 'preface'; }
}
