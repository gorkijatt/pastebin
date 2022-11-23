import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';
import { PrNavbarComponent } from './private/pr-navbar/pr-navbar.component';
import { PbNavbarComponent } from './public/pb-navbar/pb-navbar.component';
import { PbHomeComponent } from './public/pb-home/pb-home.component';
import { PbSignupComponent } from './public/pb-signup/pb-signup.component';
import { PbLoginComponent } from './public/pb-login/pb-login.component';
import { FormsModule } from '@angular/forms';
import { PbPasteComponent } from './public/pb-paste/pb-paste.component';
import { SafePipe } from './safe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    PrNavbarComponent,
    PbNavbarComponent,
    PbHomeComponent,
    PbSignupComponent,
    PbLoginComponent,
    PbPasteComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
