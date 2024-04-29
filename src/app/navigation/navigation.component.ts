import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import {
  Section, TOC, getSection, getNext, getPrev, isSubsection, getUperLink
} from '../toc';

const TITLE_PATTERN = /[\d.]+ (\S+)/;
const SIDE_NAV_WIDTH = 280; // px
const OFFSET_BUTTON = 15; // px

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatSidenav;
  readonly toc = TOC;
  private sec: Section;
  get section(): Section { return this.sec; }
  set section(section: Section) {
    if (!section) {
      return;
    }
    this.sec = section;
    const title = TITLE_PATTERN.exec(section.title);
    if (this.section.id === 'preface') {
      this.title = 'ディスクゴルフ公式規則';
    } else {
      this.title = title != null ? title[1] : section.title;
    }
    this.upperLink = getUperLink(section.id);
  }

  get menuIcon(): 'menu_open' | 'menu' { return this.upperLink ? 'menu_open' : 'menu'; }
  upperLink: string | null = null;
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
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.section = getSection(url2id(event.urlAfterRedirects));
    });
  }

  ngOnInit(): void {
    this.ssHandset = this.isHandset$.subscribe(status => {
      this.isHandset = status;
    });
  }

  ngOnDestroy(): void {
    this.ssHandset?.unsubscribe();
  }

  isSubsection(id: string): boolean {
    return isSubsection(id);
  }

  async onClickMenu(id: string): Promise<void> {
    this.section = getSection(id);
    if (this.isHandset && this.drawer?.opened) {
      await this.drawer.close();
    }
  }

  async onClickPrev(): Promise<void> {
    const prev = getPrev(this.section.id);
    if (!prev) {
      return;
    }
    this.section = prev;
    await this.router.navigate([prev.id]);
  }

  async onClickNext(): Promise<void> {
    const next = getNext(this.section.id);
    if (!next) {
      return;
    }
    this.section = next;
    await this.router.navigate([next.id]);
  }

  get isNext(): boolean {
    return !!getNext(this.section?.id);
  }

  get isPrev(): boolean {
    return !!getPrev(this.section?.id);
  }

  get offsetBottom(): string {
    return OFFSET_BUTTON + 'px';
  }

  get prevStyles(): { [key: string]: string } {
    return {
      'left': `${this.isHandset ? OFFSET_BUTTON : SIDE_NAV_WIDTH + OFFSET_BUTTON}px`,
      'bottom': this.offsetBottom
    };
  }

  get nextStyles(): { [key: string]: string } {
    return {
      'right': OFFSET_BUTTON + 'px',
      'bottom': this.offsetBottom
    };
  }
}

function url2id(url: string) {
  return url === '/' ? 'preface' : url.slice(1);
}
