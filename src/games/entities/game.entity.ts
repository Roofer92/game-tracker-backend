import { Deck } from 'src/decks/schemas/deck.schema';
import { Player } from 'src/players/schemas/player.schema';
import { Wincondition } from 'src/winconditions/entities/wincondition.entity';

class Participant {
  player: Player;
  deck: Deck;
}

export class Game {
  participants: [Participant];
  winner: Participant;
  wincondition: Wincondition;
}
