import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
{
  path:'m',
  component:MobileComponent,
  loadChildren:()=>import('./mobile/mobile.module').then(m =>m.MobileModule),
},
{
  path:'**',
  redirectTo:'/m',
  pathMatch:'full',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
