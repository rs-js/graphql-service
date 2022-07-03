import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { Band } from './entities/band.entity';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';
import { Result } from '../../common/entities/result.entity';
import { Genre } from '../genres/entities/genre.entity';
import { GenresService } from '../genres/genres.service';

@Resolver(() => Band)
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation(() => Band)
  createBand(@Args('createBandInput') createBandInput: CreateBandInput) {
    return this.bandsService.create(createBandInput);
  }

  @Query(() => [Band], { name: 'bands' })
  findAll() {
    return this.bandsService.findAll();
  }

  @Query(() => Band, { name: 'band' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.bandsService.findOne(id);
  }

  @Mutation(() => Band)
  updateBand(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
    return this.bandsService.update(updateBandInput.id, updateBandInput);
  }

  @Mutation(() => Result)
  deleteBand(@Args('id', { type: () => String }) id: string) {
    return this.bandsService.remove(id);
  }

  @ResolveField(() => [Genre])
  genres(@Parent() { genresIds }: CreateBandInput) {
    return this.genresService.findGenres(genresIds);
  }
}
