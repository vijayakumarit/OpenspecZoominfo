import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthorsService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

@ApiBearerAuth()
@ApiTags('authors')
@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Author' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() CreateAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.authorsService.create(CreateAuthorDto);
  }
//find ID
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Author,
  })
  findOne(@Param('id') id: number): Author {
    console.log("VIJAY CONTR",this.authorsService.findOne(+id))
    return this.authorsService.findOne(+id);
  }

//Find All
  
  @Get()
  async findAll(): Promise <Author[]> {
    return this.authorsService.findAll();
  }
}
