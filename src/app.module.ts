import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import {AuthorsModule} from './authors/author.module';
import {BooksModule} from './books/book.module';
import {PetsModule} from './pets/pets.module'

@Module({
  imports: [CatsModule,AuthorsModule,BooksModule,PetsModule],
})
export class AppModule {}
