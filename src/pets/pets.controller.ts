import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';

@ApiBearerAuth()
@ApiTags('Userpets')
@Controller('Userpets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  @ApiOperation({ summary: 'Create Pet' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() CreatePetDto: CreatePetDto): Promise<Pet> {
    return this.petsService.create(CreatePetDto);
  }
//find by Username
  @Get(':userName')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Pet,
  })
  findOne(@Param('userName') userName: string): Pet {
    console.log("VIJAY CONTR",this.petsService.findOne(userName))
    return this.petsService.findOne(userName);
  }

//Find All
  
  @Get()
  async findAll(): Promise <Pet[]> {
    return this.petsService.findAll();
  }

}
