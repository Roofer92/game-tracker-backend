export class CreateGameDto {
  participants: [
    {
      player: string;
      deck: string;
    },
  ];
  wincondition: string;
}
