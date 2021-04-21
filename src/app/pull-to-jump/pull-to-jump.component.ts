//
//  see [画面を引っ張ってリロード(pull to refresh)](https://qiita.com/sengoku/items/8a0f7df9f1ed903ffd63)
//
import { Component, OnInit, ElementRef } from '@angular/core';
import { concat, defer, fromEvent, Observable, timer } from 'rxjs';
import {
  filter,
  map,
  repeat,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap
} from 'rxjs/operators';
import { GotoPdgaService } from '../goto-pdga.service';

const TOP_POSITION = 0; // 画面トップ位置

/**
 *
 */
@Component({
  selector: 'app-pull-to-jump',
  templateUrl: './pull-to-jump.component.html'
})
export class PullToJumpComponent implements OnInit {
  private readonly pullDistance = window.innerHeight / 3; // 引っ張る距離
  private readonly touchstart$: Observable<TouchEvent>;
  private readonly touchend$: Observable<TouchEvent>;
  private readonly touchmove$: Observable<TouchEvent>;
  positionTranslate3d$: Observable<string>;
  opacity$: Observable<number>;

  constructor(
    private gotoPdga: GotoPdgaService,
    private elementRef: ElementRef<Element>
  ) {
    const parent = elementRef.nativeElement.parentElement;
    this.touchstart$ = fromEvent<TouchEvent>(parent, 'touchstart');
    this.touchend$ = fromEvent<TouchEvent>(parent, 'touchend');
    this.touchmove$ = fromEvent<TouchEvent>(parent, 'touchmove');

    const drag$ = this.touchstart$.pipe(
      switchMap(start => {
        // touchstartイベントが流れたら、代わりにtouchmoveイベントを購読し、移動量を流す
        let pos = TOP_POSITION;
        return concat(
          this.touchmove$.pipe(
            map(move => move.touches[0].pageY - start.touches[0].pageY),
            tap(p => (pos = p)),
            filter(p => p < this.pullDistance),
            takeUntil(this.touchend$)
          ),
          // touchendイベントが流れるまで購読し終わったら、
          // 現在位置から画面トップまでマイナス方向の値を流し、位置を戻す
          defer(() => this.tweenObservable(pos, TOP_POSITION, 200))
        );
      }),
      repeat()
    );

    const position$ = drag$.pipe(
      startWith(TOP_POSITION)
    );

    this.positionTranslate3d$ = position$.pipe(
      map(p => `translate3d(0, ${p - 70}px, 0)`)
    );

    this.opacity$ = position$.pipe(
      map(p => p / this.pullDistance)
    );
  }

  ngOnInit(): void {
    // 指を離した時に、規定距離を移動していたらリフレッシュ
    this.touchstart$
      .pipe(
        switchMap(start => {
          return this.touchend$.pipe(
            map(x => x.changedTouches[0].pageY - start.touches[0].pageY)
          );
        }),
        filter(p => p >= this.pullDistance)
      )
      .subscribe(() => {
        if (this.isAvailable) {
          this.gotoPdga.notify();
        }
      });
  }

  //
  //  check if goto-pdga is available at this morment
  //
  get isAvailable(): boolean {
    const parent = this.elementRef.nativeElement.parentElement;
    const depth = parent.getBoundingClientRect().top;
    return depth > 0;
  }

  private tweenObservable(start, end, time) {
    const emissions = time / 10;
    const step = (start - end) / emissions;

    return timer(0, 10).pipe(
      map(x => start - step * (x + 1)),
      take(emissions)
    );
  }
}
