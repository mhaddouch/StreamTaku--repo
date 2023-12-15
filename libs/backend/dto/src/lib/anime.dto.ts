import {
  Genre,
  ICreateAnime,
  IUpdateAnime,
} from '@avans-nx-individueel/shared/api';
import {
  IsEmail,
  IsEnum,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateAnimeDto implements ICreateAnime {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsEnum(Genre)
  genre!: Genre;
  @IsString()
  writer!: string;

  @IsUrl()
  animeImageUrl!: string;
}
export class UpdateAnimeDto implements IUpdateAnime {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsOptional()
  @IsEnum(Genre)
  genre!: Genre;
  @IsOptional()
  @IsString()
  writer!: string;

  @IsOptional()
  @IsUrl()
  animeImageUrl!: string;
}
