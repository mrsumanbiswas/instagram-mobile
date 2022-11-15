import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import{ ExploreComponent } from './pages/explore/explore.component'
import { ReelsComponent } from './pages/reels/reels.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { DirectComponent } from './pages/direct/direct.component';
import { UserComponent } from './pages/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { FeedComponent } from './components/feed/feed.component';
import { SavedComponent } from './components/saved/saved.component';
import { TaggedComponent } from './components/tagged/tagged.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';

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
    path:':user',
    component:UserComponent,
    children:[
      {
        path:'',
        component:PostsComponent
      },
      {
        path:'feed',
        component:FeedComponent
      },
      {
        path:'saved',
        component:SavedComponent
      },
      {
        path:'tagged',
        component:TaggedComponent
      },
      {
        path:'followers',
        component:FollowersComponent
      },
      {
        path:'following',
        component:FollowingComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
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
