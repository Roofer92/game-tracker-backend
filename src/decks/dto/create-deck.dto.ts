export class CreateDeckDto {
  name: string;
  commander: {
    name: string;
    scryfallUrl: string;
  };
  owner: string;
}
