import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  Anime,
  User,
  AnimeDocument,
} from '@avans-nx-individueel/backend/schemas';
import {
  CreateAnimeDto,
  UpdateAnimeDto,
} from '@avans-nx-individueel/backend/dto';
import { Public, Roles, AuthUser } from '@avans-nx-individueel/backend/auth';

@Injectable()
export class AnimeService {
  constructor(
    @InjectModel(Anime.name) private readonly animeModel: Model<Anime>,
    @InjectModel(User.name) private readonly userModel: Model<User>
  ) {}

  async findAll(): Promise<Anime[]> {
    return await this.animeModel.find().exec();
  }

  async findOne(id: string): Promise<Anime> {
    const anime = await this.animeModel.findById(id).exec();
    if (!anime) {
      throw new Error('Anime not found');
    }
    return anime;
  }

  async create(userId: string, anime: CreateAnimeDto): Promise<Anime> {
    //userId = '655f1f8f073d62d89725e16b';
    const publisher = await this.userModel.findById(userId).exec();
    console.log('Publisher:', publisher);
    if (!publisher) {
      throw new NotFoundException('publisher not found');
    }

    const newAnime = new this.animeModel({
      ...anime,
      publisher: publisher,
      publishedDate: new Date(),
    });

    const result = await newAnime.save();

    return result;
  }

  async update(id: string, anime: UpdateAnimeDto): Promise<AnimeDocument> {
    const result = await this.animeModel.findByIdAndUpdate(id, anime, {
      new: true,
    });
    if (!result) {
      throw new Error('Anime not found');
    }

    return result;
  }

  async remove(id: string): Promise<AnimeDocument> {
    const result = await this.animeModel.findByIdAndDelete(Object(id));
    if (!result) {
      throw new Error('Anime not found');
    }

    return result;
  }
}
