import { Deck } from 'src/decks/schemas/deck.schema';
import { Player } from 'src/players/schemas/player.schema';

export class Participant {
  player: Player;
  deck: Deck;
  isWinner: boolean;
}
