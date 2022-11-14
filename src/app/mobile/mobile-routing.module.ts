import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import{ ExploreComponent } from './pages/explore/explore.component'
import { ReelsComponent } from './pages/reels/reels.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { DirectComponent } from './pages/direct/direct.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'direct',
    component:DirectComponent
  },
  {
    path:'explore',
    component:ExploreComponent
  },
  {
    path:'reels',
    component:ReelsComponent
  },
  {
    path:'inbox',
    component:InboxComponent
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
