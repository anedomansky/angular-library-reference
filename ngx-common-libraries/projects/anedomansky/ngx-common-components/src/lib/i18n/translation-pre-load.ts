import { Translation, TranslocoService } from '@ngneat/transloco';
import { Observable } from 'rxjs';

export function translationPreLoad(transloco: TranslocoService) {
  return () => transloco.load('en');
}
