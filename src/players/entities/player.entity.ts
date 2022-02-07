import { Deck } from 'src/decks/schemas/deck.schema';

export class Player {
  _id: string;
  name: string;
  decks: Deck[];
}
