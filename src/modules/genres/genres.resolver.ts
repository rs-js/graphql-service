import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { Genre, PaginatedGenreResponse } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Result } from '../../common/entities/result.entity';
import { PaginatedInput } from '../../common/dto/paginated.input';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation(() => Genre)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genresService.create(createGenreInput);
  }

  @Query(() => PaginatedGenreResponse)
  genres(@Args('paginatedInput') paginatedInput: PaginatedInput) {
    return this.genresService.findAll(paginatedInput);
  }

  @Query(() => Genre)
  genre(@Args('id', { type: () => String }) id: string) {
    return this.genresService.findOne(id);
  }

  @Mutation(() => Genre)
  updateGenre(@Args('updateGenreInput') updateGenreInput: UpdateGenreInput) {
    return this.genresService.update(updateGenreInput.id, updateGenreInput);
  }

  @Mutation(() => Result)
  deleteGenre(@Args('id', { type: () => String }) id: string) {
    return this.genresService.remove(id);
  }
}
