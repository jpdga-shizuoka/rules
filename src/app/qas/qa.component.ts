import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GotoPdgaService } from '../goto-pdga.service';

@Component({
  selector: 'app-qa',
  template: ''
})
export abstract class QaComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();

  constructor(private gotoPdgaService: GotoPdgaService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.gotoPdgaService.requestJump$.subscribe(() => this.jump2pdga())
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private jump2pdga() {
    const url = 'https://www.pdga.com/rules/official-rules-disc-golf/questions-and-answers';
    window.location.href = url;
  }
}
