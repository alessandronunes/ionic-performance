import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VirtualScrollPage } from '../pages/virtual-scroll/virtual-scroll';
import { InfiniteScrollPage } from '../pages/infinite-scroll/infinite-scroll';
import { ListFilteringPage } from '../pages/list-filtering/list-filtering';
import { SkeletonScreenPage } from '../pages/skeleton-screen/skeleton-screen';
import { AnimationPage } from '../pages/animation/animation';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VirtualScrollPage,
    InfiniteScrollPage,
    ListFilteringPage,
    SkeletonScreenPage,
    AnimationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VirtualScrollPage,
    InfiniteScrollPage,
    ListFilteringPage,
    SkeletonScreenPage,
    AnimationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
