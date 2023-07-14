import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { DocVerificationComponent } from './doc-verification/doc-verification.component';
console.log("Oe module!!!");

@NgModule({
  declarations: [
    CheckCibilComponent,
    DocVerificationComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
