import { IsInt, IsString } from 'class-validator';

export class CreateAuthorDto {
  @IsString()
  readonly id: number;

  @IsString()
  readonly name: string;
}
