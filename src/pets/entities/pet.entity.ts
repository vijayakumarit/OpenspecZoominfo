import { ApiProperty } from '@nestjs/swagger';

export class Pet {
  /**
   * The name of the Pet
   * @example 
   */
   userName: string;
   petAge: number;
   petName:string;
   petBreed: string;
   details : string;
}
