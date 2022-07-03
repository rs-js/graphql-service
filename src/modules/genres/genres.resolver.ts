import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { Genre } from './entities/genre.entity';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';
import { Result } from '../../common/entities/result.entity';

@Resolver(() => Genre)
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation(() => Genre)
  createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
    return this.genresService.create(createGenreInput);
  }

  @Query(() => [Genre])
  genres() {
    return this.genresService.findAll();
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
