import { PartialType } from '@nestjs/mapped-types';
import { CreateWinconditionDto } from './create-wincondition.dto';

export class UpdateWinconditionDto extends PartialType(CreateWinconditionDto) {}
