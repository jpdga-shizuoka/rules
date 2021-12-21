import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotoPdgaService {
  private readonly subject = new Subject<void>();

  public get requestJump$(): Observable<void> {
    return this.subject.asObservable();
  }

  public notify(): void {
    this.subject.next();
  }
}
