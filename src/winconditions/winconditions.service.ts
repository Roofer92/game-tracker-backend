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

  async findAll() {
    return this.winconditionModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} wincondition`;
  }

  update(id: number, updateWinconditionDto: UpdateWinconditionDto) {
    return `This action updates a #${id} wincondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} wincondition`;
  }

  async incrementTotalWins(wincondition: Wincondition) {
    return await this.winconditionModel.findOneAndUpdate(
      { wincondition },
      { $inc: { total_wins: 1 } },
    );
  }
}
