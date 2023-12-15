import { AnimeService } from './anime.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import {
  Public,
  Roles,
  AuthUser,
  User,
} from '@avans-nx-individueel/backend/auth';
import {
  CreateAnimeDto,
  CreateUserDto,
  UpdateAnimeDto,
} from '@avans-nx-individueel/backend/dto';
import { IAnime, IUser, UserRole } from '@avans-nx-individueel/shared/api';
import { publish } from 'rxjs';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Public()
  @Get()
  async getAll() {
    return await this.animeService.findAll();
  }



  
  @Public()
  @Get(':id')
  async getId(@Param('id') id: string): Promise<IAnime> {
    return await this.animeService.findOne(id);
  }

  @Post()
  @Roles(UserRole.Admin)
  async create(
    @Body() newAnime: CreateAnimeDto,
    @User() user: AuthUser
  ): Promise<IAnime> {
    try {
      console.log('Anime:', newAnime); // Add this line for debugging
      console.log('User:', user);
      return await this.animeService.create(user.id, newAnime);
    } catch (error) {
      console.error('Error in AnimeController.create:', error);
      throw error; // Rethrow the error to maintain the 500 response
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedAnime: UpdateAnimeDto
  ): Promise<IAnime> {
    return await this.animeService.update(id, updatedAnime);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<IAnime> {
    return await this.animeService.remove(id);
  }
}
