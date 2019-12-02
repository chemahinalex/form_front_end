import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Pages
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// Components
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ModalComponent } from './components/modal/modal.component';

// Services
import { AuthorizationService } from './services/authorization.service';

// Modules
// import { I18nBrowserModule } from './i18n/i18n.browser.module';
import { AdminSharedModule } from '../../projects/module-admin/src/app/app.shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    ButtonComponent,
    InputComponent,
    NotificationComponent,
    HomePageComponent,
    ModalComponent
  ],
  imports: [
    // TranslateModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminSharedModule.forRoot()
    // I18nBrowserModule,
  ],
  providers: [AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
