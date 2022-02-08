import { Deck } from 'src/decks/entities/deck.entity';

export class Player {
  name: string;
  decks: Deck[];
  total_games: number;
  total_wins: number;
}
