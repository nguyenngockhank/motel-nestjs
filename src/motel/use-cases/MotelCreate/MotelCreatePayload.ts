import {
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'src/shared/domain/ClassValidator';

export class MotelCreatePayload {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  address?: string;
}
