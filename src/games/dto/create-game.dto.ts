export class CreateGameDto {
  participants: [
    {
      player: string;
      deck: string;
    },
  ];
  winner: {
    player: string;
    deck: string;
  };
  wincondition: string;
}
