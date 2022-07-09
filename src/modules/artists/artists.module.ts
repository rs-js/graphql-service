import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';
import { HttpModule } from '@nestjs/axios';
import { BandsModule } from '../bands/bands.module';

@Module({
  exports: [ArtistsService],
  imports: [HttpModule, BandsModule],
  providers: [ArtistsResolver, ArtistsService],
})
export class ArtistsModule {}
