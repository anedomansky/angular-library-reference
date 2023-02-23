import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Inject,
  Optional,
  Renderer2,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import {
  HashMap,
  MaybeArray,
  TRANSLOCO_LANG,
  TRANSLOCO_LOADING_TEMPLATE,
  TRANSLOCO_SCOPE,
  TranslocoDirective,
  TranslocoScope,
  TranslocoService,
} from '@ngneat/transloco';

type TranslateFn = (key: string, params?: HashMap) => any;

interface ViewContext {
  $implicit: TranslateFn;
  currentLang: string;
}

@Directive({
  selector: '[ngxCommonTranslation]',
})
export class NgxCommonTranslationDirective extends TranslocoDirective {
  static override ngTemplateContextGuard(
    dir: NgxCommonTranslationDirective,
    ctx: unknown
  ): ctx is ViewContext {
    return true;
  }

  constructor(
    translocoService: TranslocoService,
    @Optional() tpl: TemplateRef<ViewContext>,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    providerScope: MaybeArray<TranslocoScope>,
    @Optional()
    @Inject(TRANSLOCO_LANG)
    providerLang: string | undefined,
    @Optional()
    @Inject(TRANSLOCO_LOADING_TEMPLATE)
    providedLoadingTpl: Type<unknown> | string,
    vcr: ViewContainerRef,
    cdr: ChangeDetectorRef,
    host: ElementRef,
    renderer: Renderer2
  ) {
    super(
      translocoService,
      tpl,
      providerScope,
      providerLang,
      providedLoadingTpl,
      vcr,
      cdr,
      host,
      renderer
    );
  }
}
