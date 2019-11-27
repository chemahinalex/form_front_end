// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import {Inject, NgModule, Optional, PLATFORM_ID} from '@angular/core';
// import { BrowserTransferStateModule, makeStateKey, TransferState } from '@angular/platform-browser';
// import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateCacheModule, TranslateCacheService, TranslateCacheSettings } from 'ngx-translate-cache';
// import { Observable, of } from 'rxjs';
// import {REQUEST} from '@nguniversal/express-engine/tokens';
// import {isPlatformBrowser} from '@angular/common';
// import { Request } from 'express';
//
// import { MissingTranslationHelper } from './i18n.missing-translate';
//
// @NgModule({
//   imports: [
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: translateLoaderFactory,
//         deps: [HttpClient]
//       },
//       missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MissingTranslationHelper},
//     }),
//     TranslateCacheModule.forRoot({
//       cacheService: {
//         provide: TranslateCacheService,
//         useFactory: translateCacheFactory,
//         deps: [TranslateService, TranslateCacheSettings]
//       },
//       cacheMechanism: 'Cookie'
//     })
//   ]
// })
// export class I18nBrowserModule {
//   constructor(
//     translate: TranslateService,
//     translateCacheService: TranslateCacheService,
//     @Optional() @Inject(REQUEST) private req: Request,
//     @Inject(PLATFORM_ID) private platform: any
//   ) {
//     if (isPlatformBrowser(this.platform)) {
//       translateCacheService.init();
//     }
//     translate.addLangs(['en', 'de']);
//     const browserLang = isPlatformBrowser(this.platform)
//       ? translateCacheService.getCachedLanguage() || translate.getBrowserLang() || 'de'
//       : this.getLangFromServerSideCookie() || 'de';
//     translate.use(browserLang.match(/en|de/) ? browserLang : 'de');
//   }
//
//   getLangFromServerSideCookie() {
//     if (this.req) {
//       return this.req.cookies.lang;
//     }
//   }
// }
//
// export function translateLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient);
// }
//
// export function translateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings) {
//   return new TranslateCacheService(translateService, translateCacheSettings);
// }
