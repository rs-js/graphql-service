import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { PaginatedTrackResponse, Track } from './entities/track.entity';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { Band } from '../bands/entities/band.entity';
import { Genre } from '../genres/entities/genre.entity';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { AlbumsService } from '../albums/albums.service';
import { Album } from '../albums/entities/album.entity';
import { Result } from '../../common/entities/result.entity';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Resolver(() => Track)
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Mutation(() => Track)
  createTrack(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
    return this.tracksService.create(createTrackInput);
  }

  @Query(() => PaginatedTrackResponse)
  tracks(@Args('paginatedInput') paginatedInput: PaginatedInput) {
    return this.tracksService.findAll(paginatedInput);
  }

  @Query(() => Track)
  track(@Args('id', { type: () => String }) id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation(() => Track)
  updateTrack(@Args('updateTrackInput') updateTrackInput: UpdateTrackInput) {
    return this.tracksService.update(updateTrackInput.id, updateTrackInput);
  }

  @Mutation(() => Result)
  deleteTrack(@Args('id', { type: () => String }) id: string) {
    return this.tracksService.remove(id);
  }

  @ResolveField(() => [Album])
  albums(@Parent() { albumId }: CreateTrackInput) {
    return this.albumsService.findAlbums(albumId);
  }

  @ResolveField(() => [Band])
  bands(@Parent() { bandsIds }: CreateTrackInput) {
    return bandsIds.length > 0 ? this.bandsService.findBands(bandsIds) : [];
  }

  @ResolveField(() => [Genre])
  genres(@Parent() { genresIds }: CreateTrackInput) {
    return genresIds.length > 0 ? this.genresService.findGenres(genresIds) : [];
  }
}
