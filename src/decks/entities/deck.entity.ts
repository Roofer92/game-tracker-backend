import { Player } from 'src/players/entities/player.entity';

export class Deck {
  name: string;
  commander: {
    name: string;
    scryfallUrl: string;
  };
  owner: Player;
  total_games: number;
  total_wins: number;
}
