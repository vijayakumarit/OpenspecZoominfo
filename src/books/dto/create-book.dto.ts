import { IsInt, IsString } from 'class-validator';

export class CreateBookDto {
 
  bookId: number;
  title: string;
  authorId: number;
}
