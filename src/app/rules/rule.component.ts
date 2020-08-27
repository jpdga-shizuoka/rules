import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';
import { GotoPdgaService } from '../goto-pdga.service';

@Component({
  selector: 'app-rule',
  template: '',
})
export class RuleComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  constructor(private gotoPdgaService: GotoPdgaService) { }

  get ruleId() {return ''; }
  get isRule() {return /[0-9]+/.test(this.ruleId); }

  ngOnInit(): void {
    if (!this.isRule) {
      return;
    }
    this.subscription.add(
      this.gotoPdgaService.requestJump$.subscribe(() => this.jump2pdga(this.ruleId))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private jump2pdga(ruleId: string) {
    const url = `https://www.pdga.com/rules/official-rules-disc-golf/${this.ruleId}`;
    window.location.href = url;
  }
}