import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { DocVerificationComponent } from './doc-verification/doc-verification.component';

const routes: Routes = [
  {
    path:'check_cibil',component:CheckCibilComponent
  },
  {
    path:'verify_doc',component:DocVerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
