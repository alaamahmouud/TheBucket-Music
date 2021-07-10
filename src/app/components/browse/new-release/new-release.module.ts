import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OriginMusicComponent } from './origin-music/origin-music.component';
import { NewMusicComponent } from './new-music/new-music.component';
import { NewRadioComponent } from './new-radio/new-radio.component';
import { NewPlaylistComponent } from './new-playlist/new-playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { MainNewrealizeComponent } from './main-newrealize/main-newrealize.component';
import { LayoutModule } from '../../layout/layout.module';



const routes : Routes = [
  {path : 'main-new-realize' , component : MainNewrealizeComponent },
  {path : '' , component : MainNewrealizeComponent }
]


@NgModule({
  declarations: [
    OriginMusicComponent,
    NewMusicComponent,
    NewRadioComponent,
    NewPlaylistComponent,
    MainNewrealizeComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),LayoutModule
  ]
})
export class NewReleaseModule { }
