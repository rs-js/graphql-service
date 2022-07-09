import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ArtistsService } from './artists.service';
import { Artist, PaginatedArtistResponse } from './entities/artist.entity';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';
import { Result } from '../../common/entities/result.entity';
import { Band } from '../bands/entities/band.entity';
import { BandsService } from '../bands/bands.service';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Resolver(() => Artist)
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Mutation(() => Artist)
  createArtist(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
  ) {
    return this.artistsService.create(createArtistInput);
  }

  @Query(() => PaginatedArtistResponse)
  artists(@Args('paginatedInput') paginatedInput: PaginatedInput) {
    return this.artistsService.findAll(paginatedInput);
  }

  @Query(() => Artist)
  artist(@Args('id', { type: () => String }) id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation(() => Artist)
  updateArtist(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
  ) {
    return this.artistsService.update(updateArtistInput.id, updateArtistInput);
  }

  @Mutation(() => Result)
  deleteArtist(@Args('id', { type: () => String }) id: string) {
    return this.artistsService.remove(id);
  }

  @ResolveField(() => [Band])
  bands(@Parent() { bandsIds }: CreateArtistInput) {
    return this.bandsService.findBands(bandsIds);
  }

  @ResolveField(() => String)
  instruments(@Parent() { instruments }: CreateArtistInput) {
    return instruments.join(', ');
  }
}
