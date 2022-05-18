import { IsInt, IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  readonly userName: string;

  @IsInt()
  readonly petAge: number;

  @IsString()
  readonly petName: string;

  @IsString()
  readonly petBreed: string;

  @IsString()
  readonly details: string;
}
