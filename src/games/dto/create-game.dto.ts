export class CreateGameDto {
  participants: {
    player: string;
    deck: string;
    isWinner: boolean;
  }[];
  wincondition: boolean;
}
