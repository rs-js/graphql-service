import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourites } from './entities/favourites.entity';
import { RemoveFromFavouritesInput } from './dto/remove-from-favourites.input';
import { Artist } from '../artists/entities/artist.entity';
import { Band } from '../bands/entities/band.entity';
import { Track } from '../tracks/entities/track.entity';
import { Genre } from '../genres/entities/genre.entity';
import { ArtistsService } from '../artists/artists.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';

@Resolver(() => Favourites)
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly tracksService: TracksService,
  ) {}

  @Query(() => Favourites)
  favourites() {
    return this.favouritesService.findAll();
  }

  @Mutation(() => Favourites)
  addTrackToFavourites(@Args('id', { type: () => String }) id: string) {
    return this.favouritesService.addToFavourites({ type: 'tracks', id });
  }

  @Mutation(() => Favourites)
  addBandToFavourites(@Args('id', { type: () => String }) id: string) {
    return this.favouritesService.addToFavourites({
      type: 'bands',
      id,
    });
  }

  @Mutation(() => Favourites)
  addArtistToFavourites(@Args('id', { type: () => String }) id: string) {
    return this.favouritesService.addToFavourites({
      type: 'artists',
      id,
    });
  }

  @Mutation(() => Favourites)
  addGenreToFavourites(@Args('id', { type: () => String }) id: string) {
    return this.favouritesService.addToFavourites({
      type: 'genres',
      id,
    });
  }

  @Mutation(() => Favourites)
  removeFavourite(
    @Args('removeFavouriteInput')
    removeFavouriteInput: RemoveFromFavouritesInput,
  ) {
    return this.favouritesService.remove(removeFavouriteInput);
  }

  @ResolveField(() => [Artist], { nullable: true })
  artists(@Parent() { artistsIds }: { artistsIds: string[] }) {
    return artistsIds.length > 0
      ? this.artistsService.findArtists(artistsIds)
      : [];
  }

  @ResolveField(() => [Band], { nullable: true })
  bands(@Parent() { bandsIds }: { bandsIds: string[] }) {
    return bandsIds.length > 0 ? this.bandsService.findBands(bandsIds) : [];
  }

  @ResolveField(() => [Track], { nullable: true })
  tracks(@Parent() { tracksIds }: { tracksIds: string[] }) {
    return tracksIds.length > 0 ? this.tracksService.findTracks(tracksIds) : [];
  }

  @ResolveField(() => [Genre], { nullable: true })
  genres(@Parent() { genresIds }: { genresIds: string[] }) {
    return genresIds.length > 0 ? this.genresService.findGenres(genresIds) : [];
  }
}
