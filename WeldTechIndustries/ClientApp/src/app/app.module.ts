import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Module
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout';
import { PagesModule } from './pages';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ToastrModule } from 'ngx-toastr';
// Routes
import { routes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    LayoutModule,
    PagesModule,
    NgxCaptchaModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
