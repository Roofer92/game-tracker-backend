export class CreateDeckDto {
  name: string;
  commander: [
    {
      name: string;
      scryfall_url: string;
    },
  ];
  owner: string;
}
