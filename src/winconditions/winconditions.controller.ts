import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WinconditionsService } from './winconditions.service';
import { CreateWinconditionDto } from './dto/create-wincondition.dto';
import { UpdateWinconditionDto } from './dto/update-wincondition.dto';

@Controller('winconditions')
export class WinconditionsController {
  constructor(private readonly winconditionsService: WinconditionsService) {}

  @Post()
  create(@Body() createWinconditionDto: CreateWinconditionDto) {
    return this.winconditionsService.create(createWinconditionDto);
  }

  @Get()
  findAll() {
    return this.winconditionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.winconditionsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWinconditionDto: UpdateWinconditionDto,
  ) {
    return this.winconditionsService.update(id, updateWinconditionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.winconditionsService.remove(id);
  }
}
