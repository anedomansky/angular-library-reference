import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Translation,
  TranslocoScope,
  TranslocoService,
} from '@ngneat/transloco';
import { catchError, combineLatest, map, Observable, of } from 'rxjs';

type TranslationResult = { language: string; result: unknown };

type ParamsMap<T = any> = Record<string, T>;

@Injectable({
  providedIn: 'root',
})
export class NgxCommonTranslationService {
  constructor(
    private http: HttpClient,
    private translateService: TranslocoService
  ) {}

  /**
   * Retrieves and sets the translations.
   * The path which is given should contain a JSON file for every given language.
   * The file should just contain the name of the language, e.g. "de.json"
   *
   * @param path Local or remote path (e.g. /assets/i18n/)
   * @param availableLanguages List of languages
   *
   * @example
   *
   * addTranslationsByPath('/assets/i18n', ['en', 'de'])
   * addTranslationsByPath('/assets/i18n', ['scope/en', 'scope/de'])
   */
  addTranslationsByPath(
    path: string,
    availableLanguages: string[]
  ): Observable<void> {
    if (availableLanguages.length === 0) {
      return of(undefined);
    }

    if (!path.endsWith('/')) {
      path += '/';
    }

    return combineLatest(
      availableLanguages.map((language) =>
        this.http.get(`${path}${language}.json`).pipe(
          map((result) => ({ language, result })),
          catchError(() => of({ language, result: null }))
        )
      )
    ).pipe(
      map((receivedTranslations) =>
        receivedTranslations.filter((translations) => !!translations.result)
      ),
      map((translations: TranslationResult[]) => {
        translations.forEach(({ language, result }) => {
          this.setTranslation(result as ParamsMap, language);
        });
      })
    );
  }

  /**
   * Set translations directly. The new translations are merged with the existing.
   *
   * @param translation new or overwritten translations
   * @param [language='current-language'] language of the translations
   *
   * @example
   *
   * setTranslation({ ... })
   * setTranslation({ ... }, 'en')
   * setTranslation({ ... }, 'es')
   * setTranslation({ ... }, 'todos/en')
   */
  setTranslation(translation: Translation, language?: string): void {
    console.log('setTranslation: ', translation, language);
    this.translateService.setTranslation(translation, language, {
      merge: true,
    });
  }

  /**
   * Gets the instant translated value of a key.
   * You should use this method if you expect a simple string as translation.
   *
   * Note that in order to safely use this method, you are responsible for ensuring that the translation files
   * have been successfully loaded by the time it's called.
   *
   * @example
   *
   * translate<string>('hello')
   * translate('hello', { value: 'value' })
   * translate<string[]>(['hello', 'key'])
   * translate('hello', { }, 'en')
   * translate('scope.someKey', { }, 'en')
   */
  translate<T = string>(
    key: string | string[],
    params: ParamsMap = {},
    langOrScope?: string
  ): T {
    return this.translateService.translate<T>(key, params, langOrScope);
  }

  /**
   * Translate the given path that returns an object.
   * You should use this method if you expect an array or an object as translation.
   *
   * Note that in order to safely use this method, you are responsible for ensuring that the translation files
   * have been successfully loaded by the time it's called.
   *
   * @example
   *
   * service.translateObject('path.to.object', {'subpath': { value: 'someValue'}}) => returns translated object
   *
   */
  translateObject<T = any>(key: string, params?: ParamsMap, lang?: string): T;
  translateObject<T = any>(
    key: string[],
    params?: ParamsMap,
    lang?: string
  ): T[];
  translateObject<T = any>(
    key: string | string[],
    params: ParamsMap = {},
    lang?: string
  ): T | T[] {
    return this.translateService.translateObject(key, params, lang);
  }

  /**
   * Gets the translated value of a key as observable.
   * You should use this method if you expect a simple string as translation.
   *
   * @example
   *
   * selectTranslate<string>('hello').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'es').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, 'todos').subscribe(value => ...)
   * selectTranslate<string>('hello', {}, { scope: 'todos' }).subscribe(value => ...)
   *
   */
  selectTranslate<T = any>(
    key: string | string[],
    params: ParamsMap = {},
    langOrScope?: TranslocoScope
  ): Observable<T> {
    return this.translateService.selectTranslate(key, params, langOrScope);
  }

  /**
   * Gets the translated value of a key as observable.
   * You should use this method if you expect an array or an object as translation.
   *
   * @example
   *
   * selectTranslateObject<string>('hello').subscribe(value => ...)
   * selectTranslateObject<string>('hello', {}, 'es').subscribe(value => ...)
   * selectTranslateObject<string>('hello', {}, 'todos').subscribe(value => ...)
   * selectTranslateObject<string>('hello', {}, { scope: 'todos' }).subscribe(value => ...)
   *
   */
  selectTranslateObject<T = any>(
    key: string,
    params?: ParamsMap,
    langOrScope?: TranslocoScope
  ): Observable<T>;
  selectTranslateObject<T = any>(
    key: string[],
    params?: ParamsMap,
    langOrScope?: TranslocoScope
  ): Observable<T[]>;
  selectTranslateObject<T = any>(
    key: string | string[],
    params: ParamsMap = {},
    langOrScope?: TranslocoScope
  ): Observable<T> | Observable<T[]> {
    return this.translateService.selectTranslate<T>(
      key,
      params,
      langOrScope,
      true
    );
  }

  /**
   * Sets the currently active language
   * @param language new language
   */
  setActiveLang(language: string): void {
    this.translateService.setActiveLang(language);
  }
}
