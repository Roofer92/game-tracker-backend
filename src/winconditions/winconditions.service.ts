import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWinconditionDto } from './dto/create-wincondition.dto';
import { UpdateWinconditionDto } from './dto/update-wincondition.dto';
import { Wincondition } from './entities/wincondition.entity';
import { WinconditionDocument } from './schemas/wincondition.schema';

@Injectable()
export class WinconditionsService {
  constructor(
    @InjectModel('Wincondition')
    private winconditionModel: Model<WinconditionDocument>,
  ) {}

  async create(
    createWinconditionDto: CreateWinconditionDto,
  ): Promise<Wincondition> {
    const createdWincondition = new this.winconditionModel(
      createWinconditionDto,
    );
    return createdWincondition.save();
  }

  async findAll(): Promise<Wincondition[]> {
    return this.winconditionModel.find();
  }

  async findOne(id: string): Promise<Wincondition> {
    return this.winconditionModel.findOne({ _id: id });
  }

  async update(
    id: string,
    updateWinconditionDto: UpdateWinconditionDto,
  ): Promise<Wincondition> {
    return this.winconditionModel.findOneAndUpdate(
      { _id: id },
      updateWinconditionDto,
    );
  }

  async remove(id: string): Promise<any> {
    const wincon = await this.winconditionModel.findOne({ _id: id });

    if (wincon.total_wins != 0) {
      // TODO: return error and dont delete wincon
    }

    return this.winconditionModel.deleteOne({ _id: id });
  }

  async incrementTotalWins(wincondition: Wincondition) {
    return await this.winconditionModel.findOneAndUpdate(
      { wincondition },
      { $inc: { total_wins: 1 } },
    );
  }

  async decrementTotalWins(wincondition: Wincondition) {
    return await this.winconditionModel.findOneAndUpdate(
      { wincondition },
      { $inc: { total_wins: -1 } },
    );
  }
}
