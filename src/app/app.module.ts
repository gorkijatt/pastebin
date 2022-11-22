import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrNavbarComponent } from './private/pr-navbar/pr-navbar.component';
import { PbNavbarComponent } from './public/pb-navbar/pb-navbar.component';
import { PbHomeComponent } from './public/pb-home/pb-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PrNavbarComponent,
    PbNavbarComponent,
    PbHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
