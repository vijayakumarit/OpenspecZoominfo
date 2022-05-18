import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  private readonly pets: Pet[] = [];

  create(pet: CreatePetDto): Pet {
    this.pets.push(pet);
    return pet;
  }

  findOne(userName: string): Pet {
    return this.pets.find(pet => pet.userName === userName);
  }

  findAll(): Pet[] {
    return this.pets;
  }

  


}
