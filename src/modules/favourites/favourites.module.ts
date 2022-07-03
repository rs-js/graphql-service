import { Module } from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { HttpModule } from '@nestjs/axios';
import { BandsModule } from '../bands/bands.module';
import { ArtistsModule } from '../artists/artists.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';

@Module({
  imports: [HttpModule, BandsModule, ArtistsModule, GenresModule, TracksModule],
  providers: [FavouritesResolver, FavouritesService],
})
export class FavouritesModule {}
