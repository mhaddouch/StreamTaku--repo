import { ICreateEpisode } from '@avans-nx-individueel/shared/api';
import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateEpisodeDto implements ICreateEpisode {
  @IsString()
  episodeTitle!: string;

  @IsNumber()
  episodeNumber!: number;
  @IsUrl()
  videoUrl!: string;
}
export class UpdateEpisodeDto implements ICreateEpisode {
  @IsOptional()
  @IsString()
  episodeTitle!: string;
  @IsOptional()
  @IsNumber()
  episodeNumber!: number;
  @IsOptional()
  @IsUrl()
  videoUrl!: string;
}
