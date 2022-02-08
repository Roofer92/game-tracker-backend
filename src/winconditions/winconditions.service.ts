import { Injectable } from '@nestjs/common';
import { CreateWinconditionDto } from './dto/create-wincondition.dto';
import { UpdateWinconditionDto } from './dto/update-wincondition.dto';

@Injectable()
export class WinconditionsService {
  create(createWinconditionDto: CreateWinconditionDto) {
    return 'This action adds a new wincondition';
  }

  findAll() {
    return `This action returns all winconditions`;
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
}
