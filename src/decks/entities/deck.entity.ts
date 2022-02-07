import { Player } from 'src/players/schemas/player.schema';

export class Deck {
  _id: string;
  name: string;
  commander: {
    name: string;
    scryfallUrl: string;
  };
  owner: Player;
}
