import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';
import { PlayerDocument } from './schemas/player.schema';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel('Player') private playerModel: Model<PlayerDocument>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return createdPlayer.save();
  }

  async findAll(): Promise<Player[]> {
    return this.playerModel.find().exec();
  }

  async findOne(id: string): Promise<Player> {
    return this.playerModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    return this.playerModel
      .findOneAndUpdate({ _id: id }, updatePlayerDto)
      .exec();
  }

  async remove(id: number) {
    // TODO: Implement remove
    return `This action removes a #${id} player`;
  }
}
