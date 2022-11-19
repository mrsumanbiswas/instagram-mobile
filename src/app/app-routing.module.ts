import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
{
  path:'',
  component:MobileComponent,
  loadChildren:()=>import('./mobile/mobile.module').then(m =>m.MobileModule),
},
{
  path:'**',
  redirectTo:'',
  pathMatch:'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
