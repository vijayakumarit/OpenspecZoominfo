import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BooksService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@ApiBearerAuth()
@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create Book' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() CreateBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(CreateBookDto);
  }
//find ID
  @Get(':bookId')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Book,
  })
  findOne(@Param('bookId') bookId: number): Book {
    console.log("VIJAY CONTR",this.booksService.findOne(+bookId))
    return this.booksService.findOne(+bookId);
  }

//Find All
  
  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }
}
