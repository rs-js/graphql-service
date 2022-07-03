import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresResolver } from './genres.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  exports: [GenresService],
  imports: [HttpModule],
  providers: [GenresResolver, GenresService],
})
export class GenresModule {}
