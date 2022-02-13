import { Player } from 'src/players/entities/player.entity';
import { Commander } from './commander.entity';

export class Deck {
  name: string;
  commander: Commander[];
  owner: Player;
  total_games: number;
  total_wins: number;
}
