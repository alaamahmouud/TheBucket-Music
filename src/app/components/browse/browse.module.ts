import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicComponent } from './music/music.component';
import { AlbumComponent } from './album/album.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { MainBrowseComponent } from './main-browse/main-browse.component';
import { HeaderMenuComponent } from './layout/header-menu/header-menu.component';
import { MainPopularComponent } from './popular/main-popular/main-popular.component';



const routes : Routes = [
  {path : 'main' , component : MainBrowseComponent},
  {
    path: 'new-release',
    loadChildren: () => import('./new-release/new-release.module').then(m => m.NewReleaseModule)
  },
  {path : 'album' , component : AlbumComponent},
  {path : 'popular' , component : MainPopularComponent},
  {path : 'music' , component : MusicComponent},
  {path : 'playlist' , component : PlaylistComponent},
  {
    path: '',
    loadChildren: () => import('./new-release/new-release.module').then(m => m.NewReleaseModule)
  }

]

@NgModule({
  declarations: [
    MainPopularComponent,
    MusicComponent,
    AlbumComponent,
    PlaylistComponent,
    MainBrowseComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),LayoutModule
  ]
})
export class BrowseModule { }
