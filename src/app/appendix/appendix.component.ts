import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GotoPdgaService } from '../goto-pdga.service';

@Component({
  selector: 'app-appendix',
  template: ''
})
export class AppendixComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  constructor(private gotoPdgaService: GotoPdgaService) { }

  get id(): string { return ''; }
  get isRule(): boolean { return /[0-9]+/.test(this.id); }

  ngOnInit(): void {
    if (!this.isRule) {
      return;
    }
    this.subscription.add(
      this.gotoPdgaService.requestJump$.subscribe(() => this.jump2pdga(this.id))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private jump2pdga(id: string) {
    const url = `https://www.pdga.com/rules/official-rules-disc-golf/appendix-${id}`;
    window.location.href = url;
  }
}
