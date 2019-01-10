import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class BaseDirective implements OnDestroy {
  destroy$ = new Subject();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
