import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponentComponent } from '../center-component/center-component.component'
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component'
const routes: Routes = [
  {
    path: '',
    component: CenterComponentComponent,
  },
  // {
  //   path: 'product/:id',
  //   component: ProductDetailsComponent,
  // },
  { path: '**', component: PagenotfoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
