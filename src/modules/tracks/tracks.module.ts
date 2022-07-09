import { forwardRef, Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { HttpModule } from '@nestjs/axios';
import { AlbumsModule } from '../albums/albums.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';

@Module({
  exports: [TracksService],
  imports: [
    HttpModule,
    BandsModule,
    GenresModule,
    forwardRef(() => AlbumsModule),
  ],
  providers: [TracksResolver, TracksService],
})
export class TracksModule {}
