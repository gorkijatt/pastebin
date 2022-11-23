import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PbHomeComponent } from './public/pb-home/pb-home.component';
import { PbLoginComponent } from './public/pb-login/pb-login.component';
import { PbPasteComponent } from './public/pb-paste/pb-paste.component';
import { PbSignupComponent } from './public/pb-signup/pb-signup.component';

const routes: Routes = [
  { path:  '', 
    component: PbHomeComponent
  },
  { path: 'signup', 
    component:PbSignupComponent 
  },
  { path: 'login', 
    component:PbLoginComponent 
  },
  { path: 'paste/:url', 
    component:PbPasteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
