import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { HeaderComponent } from "./components/layout/header/header.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { UserComponent } from './pages/user/user.component';
import { DirectComponent } from './pages/direct/direct.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { HomeComponent } from './pages/home/home.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { ReelsComponent } from './pages/reels/reels.component';

@NgModule({
  declarations: [
    MobileComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    DirectComponent,
    ExploreComponent,
    HomeComponent,
    InboxComponent,
    ReelsComponent

  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
  ]
})
export class MobileModule { }
