import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  create(book: CreateBookDto): Book {
    this.books.push(book);
    return book;
  }

  findOne(bookId: number): Book {
    console.log("VIJAY",this.books[bookId])
    return this.books.find(book => book.bookId === bookId);
  }

  findAll(): Book[] {
    console.log("VIJAY",this.books)
    return this.books;
  }

}
