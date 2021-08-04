import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersionDisbursementComponent } from './persion-disbursement/persion-disbursement.component';
import { PersionerInputComponent } from './persioner-input/persioner-input.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersionDisbursementComponent,
    PersionerInputComponent,
    SuccessComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'persionDisbursement',
          component: PersionDisbursementComponent
        },
        {
          path: 'persionerInput',
          component: PersionerInputComponent
        },
        {
          path: 'success',
          component: SuccessComponent
        },
        {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
        },
        {
          path: '**',
          component: ErrorComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
