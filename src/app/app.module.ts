import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { GlaccountModule } from './glaccount/glaccount.module';
import { RecoveryModule } from './recovery/recovery.module';
import { MatTableModule } from '@angular/material/table';

import { TokenInterceptor } from './token.interceptor';

import { GlaccountService } from './glaccount.service';
import { EaeService } from './eae.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    GlaccountModule,
    RecoveryModule,
    NgbModule,
    MatTableModule,
  ],
  providers: [
    GlaccountService,
    EaeService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
