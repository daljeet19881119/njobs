import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoginHomePage } from '../pages/login-home/login-home';
import { VerificationPage } from '../pages/verification/verification';
import { EmployeeejobPage } from '../pages/employeeejob/employeeejob';
import { EmployerHirePage } from '../pages/employer-hire/employer-hire';
import { UserVerificationProvider } from '../providers/user-verification/user-verification';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LoginHomePage,
    VerificationPage,
    EmployeeejobPage,
    EmployerHirePage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    LoginHomePage,
    VerificationPage,
    EmployeeejobPage,
    EmployerHirePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserVerificationProvider
  ]
})
export class AppModule {}
