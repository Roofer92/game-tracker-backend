import { Wincondition } from 'src/winconditions/entities/wincondition.entity';
import { Participant } from './participant.entity';

export class Game {
  participants: Participant[];
  winner: Participant;
  wincondition: Wincondition;
}
