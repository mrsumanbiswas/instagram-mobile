import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { FooterComponent } from "./components/footer/footer.component";
import { UserComponent } from './pages/user/user.component';
import { DirectComponent } from './pages/direct/direct.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ReelsComponent } from './pages/reels/reels.component';
import { FeedComponent } from './components/feed/feed.component';
import { FollowersComponent } from './components/followers/followers.component';
import { FollowingComponent } from './components/following/following.component';
import { PostsComponent } from './components/posts/posts.component';
import { SavedComponent } from './components/saved/saved.component';
import { TaggedComponent } from './components/tagged/tagged.component';
import { StoryComponent } from './components/story/story.component';
import { SuggetionComponent } from './components/suggetion/suggetion.component';

@NgModule({
  declarations: [
    MobileComponent,
    FooterComponent,
    UserComponent,
    DirectComponent,
    ExploreComponent,
    HomeComponent,
    InboxComponent,
    ReelsComponent,
    FeedComponent,
    FollowersComponent,
    FollowingComponent,
    PostsComponent,
    SavedComponent,
    TaggedComponent,
    StoryComponent,
    SuggetionComponent

  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
  ]
})
export class MobileModule { }
