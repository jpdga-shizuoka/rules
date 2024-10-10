import { Component } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rules';

  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
  ) {
    if (swUpdate.isEnabled) {
      this.swUpdate.versionUpdates
        .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
        .subscribe((evt) => {
          this.promptUser(evt).then((result) => {
            if (result) {
              document.location.reload();
            }
          });
        }
      )
    }
  }

  private promptUser(evt: VersionReadyEvent): Promise<boolean> {
    return new Promise((resolve) => {
      const snackBarRef = this.snackBar.open(
        '新しい版が準備できました', '更新', {duration: 30000}
      );

      snackBarRef.onAction().subscribe(() => {
        resolve(true);
      });

      snackBarRef.afterDismissed().subscribe(() => {
        resolve(false);
      });
    });
  }
}
