import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map, shareReplay } from 'rxjs/operators';
import { Section, TOC, getSection, getNext, getPrev, isSubsection } from '../toc';

const TITLE_PATTERN = /[\d\.]+ (\S+)/;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav;
  readonly toc = TOC;
  private _section: Section;
  get section() {return this._section; }
  set section(section: Section) {
    if (!section) {
      return;
    }
    this._section = section;
    const title = section.title.match(TITLE_PATTERN);
    if (this.section.id === 'preface') {
      this.title = 'ディスクゴルフ規則';
    } else {
      this.title = title != null ? title[1] : section.title;
    }
  }
  title: string;
  isHandset: boolean;
  ssHandset: Subscription;
  readonly isHandset$: Observable<boolean>
    = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe((event: NavigationEnd) =>
      this.section = getSection(url2id(event.urlAfterRedirects)));
  }

  ngOnInit() {
    this.ssHandset = this.isHandset$.subscribe(status => this.isHandset = status);
  }

  ngOnDestroy() {
    this.ssHandset?.unsubscribe();
  }

  isSubsection(id: string) {
    return isSubsection(id);
  }

  onClickMenu(id: string) {
    this.section = getSection(id);
    if (this.isHandset && this.drawer?.opened) {
      this.drawer.close();
    }
  }

  onClickPrev() {
    const prev = getPrev(this.section.id);
    if (!prev) {
      return;
    }
    this.section = prev;
    this.router.navigate([prev.id]);
  }

  onClickNext() {
    const next = getNext(this.section.id);
    if (!next) {
      return;
    }
    this.section = next;
    this.router.navigate([next.id]);
  }

  get isNext() {
    return this.isHandset && !this.drawer?.opened && !!getNext(this.section?.id);
  }

  get isPrev() {
    return this.isHandset && !this.drawer?.opened && !!getPrev(this.section?.id);
  }
}

function url2id(url: string) {
  return url.slice(1, );
}
