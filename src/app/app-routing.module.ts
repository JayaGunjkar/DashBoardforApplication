import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUSComponent } from './template/about-us/about-us.component';
import { LoginComponent } from './entry/login/login.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './template/enquiry/enquiry.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';
import { EmailComponent } from './entry/email/email.component';

import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,
    children:[
      {
        path:'about',component:AboutUSComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'contact',component:ContactUsComponent
      },
      {
        path:'location',component:LocationComponent
      },
      {
        path:'enquiry',component:EnquiryComponent
      }
      
    ]
  },
  
    {
      path:'emi',component:EmiCalculatorComponent
    
  },
  {
    path:'dash',component:DashBoardComponent,children:[
      {
        path:'re' ,loadChildren:()=>import('src/app/modules/re/re.module').then(m=>m.ReModule)
      },//For lazy loading
      {
        path:'oe' , loadChildren:()=>import('src/app/modules/oe/oe.module').then(m=>m.OeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
