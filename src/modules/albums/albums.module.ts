import { forwardRef, Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { HttpModule } from '@nestjs/axios';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { TracksModule } from '../tracks/tracks.module';
import { GenresModule } from '../genres/genres.module';

@Module({
  exports: [AlbumsService],
  imports: [
    HttpModule,
    ArtistsModule,
    BandsModule,
    forwardRef(() => TracksModule),
    GenresModule,
  ],
  providers: [AlbumsResolver, AlbumsService],
})
export class AlbumsModule {}
