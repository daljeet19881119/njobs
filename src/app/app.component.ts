import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoginHomePage } from '../pages/login-home/login-home';
import { VerificationPage } from '../pages/verification/verification';
import { EmployeeejobPage } from '../pages/employeeejob/employeeejob';
import { EmployerHirePage } from '../pages/employer-hire/employer-hire';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginHomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

