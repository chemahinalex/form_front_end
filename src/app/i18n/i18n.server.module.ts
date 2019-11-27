// import { Inject, NgModule } from '@angular/core';
// import { REQUEST } from '@nguniversal/express-engine/tokens';
// import {MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
// import { Request } from 'express';
// import { readFileSync } from 'fs';
// import { join } from 'path';
// import { Observable, of } from 'rxjs';
// import {MissingTranslationHelper} from './i18n.missing-translate';
//
// @NgModule({
//   imports: [
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: translateFSLoaderFactory
//       },
//       missingTranslationHandler: {provide: MissingTranslationHandler, useClass: MissingTranslationHelper},
//     })
//   ]
// })
// export class I18nServerModule {
//   constructor(translate: TranslateService, @Inject(REQUEST) req: Request) {
//     translate.addLangs(['en', 'de']);
//
//     const language: 'en' | 'de' = req.cookies.lang || 'de';
//     translate.use(language.match(/en|de/) ? language : 'de');
//   }
// }
//
// export class TranslateFSLoader implements TranslateLoader {
//   constructor(private prefix = 'i18n', private suffix = '.json') { }
//
//   public getTranslation(lang: string): Observable<any> {
//     const path = join(__dirname, '../browser/assets/', this.prefix, `${lang}${this.suffix}`);
//     const data = JSON.parse(readFileSync(path, 'utf8'));
//
//     return of(data);
//   }
// }
//
// export function translateFSLoaderFactory() {
//   return new TranslateFSLoader();
// }
