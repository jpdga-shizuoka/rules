//
//  see [画面を引っ張ってリロード(pull to refresh)](https://qiita.com/sengoku/items/8a0f7df9f1ed903ffd63)
//
import { Component, OnInit } from '@angular/core';
import { concat, defer, fromEvent, Observable, timer } from 'rxjs';
import {
  filter,
  map,
  repeat,
  skipUntil,
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
  private readonly touchstart$ = fromEvent<TouchEvent>(document, 'touchstart');
  private readonly touchend$ = fromEvent<TouchEvent>(document, 'touchend');
  private readonly touchmove$ = fromEvent<TouchEvent>(document, 'touchmove');

  private drag$ = this.touchstart$.pipe(
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

  private position$: Observable<number> = this.drag$.pipe(
    startWith(TOP_POSITION)
  );

  positionTranslate3d$: Observable<string> = this.position$.pipe(
    map(p => `translate3d(0, ${p - 70}px, 0)`)
  );

  opacity$: Observable<number> = this.position$.pipe(
    map(p => p / this.pullDistance)
  );

  constructor(private gotoPdga: GotoPdgaService) {}

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
      .subscribe(() => this.gotoPdga.notify());
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
