import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { profileRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

// const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
//   new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http, `${new URL('./assets/i18n/', import.meta.url).toString()}/`, '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(profileRoutes),
    provideAnimations(),
    provideHttpClient(),
    // Translation support (using forChild since the host provides forRoot)
    // importProvidersFrom([
    //   TranslateModule.forChild({ // todo - remote mfe's en.json is not working, need to try alternate approach
    //     loader: {
    //       provide: TranslateLoader,
    //       useFactory: httpLoaderFactory,
    //       deps: [HttpClient]
    //     },
    //     isolate: true  // optional, but good to avoid shared state
    //   })
    // ])
    provideTranslateService({
      loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ]
};
