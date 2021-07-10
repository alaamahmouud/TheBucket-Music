import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedComponent } from './featured/featured.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { OnlineRadioComponent } from './online-radio/online-radio.component';
import { VerifiedArtistsComponent } from './verified-artists/verified-artists.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { DiscoverPageComponent } from './discover-page/discover-page.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path : 'main-discover' , component : DiscoverPageComponent},
  {path : '' , component : DiscoverPageComponent},
]

@NgModule({
  declarations: [
    FeaturedComponent,
    RecommendedComponent,
    OnlineRadioComponent,
    VerifiedArtistsComponent,
    PlaylistsComponent,
    DiscoverPageComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class DiscoverModule { }
