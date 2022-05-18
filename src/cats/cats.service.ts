import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto): Cat {
    this.cats.push(cat);
    return cat;
  }

  findOne(breed: string): Cat {
    return this.cats.find(cat => cat.breed === breed);
  }

  findAll(): Cat[] {
    return this.cats;
  }

}
