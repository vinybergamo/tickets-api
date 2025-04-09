import { IsArray, IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  longDescription: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;

  @IsString()
  @IsOptional()
  location: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  lineup: string[];
}
