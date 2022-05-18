import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [];

  create(author: CreateAuthorDto): Author {
    this.authors.push(author);
    return author;
  }

  findOne(id: number): Author {
    return this.authors.find(author =>author.id === id);
  }

  findAll(): Author[] {
  
    return this.authors;
  }

}
