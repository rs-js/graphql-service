import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';
import { HttpModule } from '@nestjs/axios';
import { GenresModule } from '../genres/genres.module';

@Module({
  exports: [BandsService],
  imports: [HttpModule, GenresModule],
  providers: [BandsResolver, BandsService],
})
export class BandsModule {}
