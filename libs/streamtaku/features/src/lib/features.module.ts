import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from './anime/anime-detail/anime-detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AnimeListComponent, AnimeDetailComponent, AboutComponent],
  exports: [AboutComponent],
})
export class FeaturesModule {}
