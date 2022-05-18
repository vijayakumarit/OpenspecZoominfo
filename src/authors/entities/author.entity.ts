import { ApiProperty } from '@nestjs/swagger';

export class Author {
  /**
   * The name of the Author
   * 
   */
  id: number;
  name: string;
}
