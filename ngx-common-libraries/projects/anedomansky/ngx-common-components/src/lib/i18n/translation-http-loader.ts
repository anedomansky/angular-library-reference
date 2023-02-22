import { Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@ngneat/transloco';
import { TranslocoLoaderData } from '@ngneat/transloco/lib/transloco.loader';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TranslationHttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(
    lang: string,
    data?: TranslocoLoaderData | undefined
  ): Observable<Translation> | Promise<Translation> {
    console.log('triggered');
    return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
  }
}
