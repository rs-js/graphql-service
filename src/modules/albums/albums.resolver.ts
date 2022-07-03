import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ArtistsService } from '../artists/artists.service';
import { BandsService } from '../bands/bands.service';
import { TracksService } from '../tracks/tracks.service';
import { GenresService } from '../genres/genres.service';
import { Genre } from '../genres/entities/genre.entity';
import { Track } from '../tracks/entities/track.entity';
import { Band } from '../bands/entities/band.entity';
import { Artist } from '../artists/entities/artist.entity';
import { Result } from '../../common/entities/result.entity';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly tracksService: TracksService,
  ) {}

  @Mutation(() => Album)
  createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query(() => [Album], { name: 'albums' })
  findAll() {
    return this.albumsService.findAll();
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation(() => Album)
  updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  }

  @Mutation(() => Result)
  deleteAlbum(@Args('id', { type: () => String }) id: string) {
    return this.albumsService.remove(id);
  }

  @ResolveField(() => [Artist])
  artists(@Parent() { artistsIds }: CreateAlbumInput) {
    return artistsIds.length > 0
      ? this.artistsService.findArtists(artistsIds)
      : [];
  }

  @ResolveField(() => [Band])
  bands(@Parent() { bandsIds }: CreateAlbumInput) {
    return bandsIds.length > 0 ? this.bandsService.findBands(bandsIds) : [];
  }

  @ResolveField(() => [Track])
  tracks(@Parent() { trackIds }: CreateAlbumInput) {
    return trackIds.length > 0 ? this.tracksService.findTracks(trackIds) : [];
  }

  @ResolveField(() => [Genre])
  genres(@Parent() { genresIds }: CreateAlbumInput) {
    return genresIds.length > 0 ? this.genresService.findGenres(genresIds) : [];
  }
}
