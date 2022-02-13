import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlayersService } from 'src/players/players.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { Deck } from './entities/deck.entity';
import { DeckDocument } from './schemas/deck.schema';

@Injectable()
export class DecksService {
  constructor(
    @InjectModel('Deck') private deckModel: Model<DeckDocument>,
    private playersService: PlayersService,
  ) {}

  async create(createDeckDto: CreateDeckDto): Promise<Deck> {
    const createdDeck = new this.deckModel(createDeckDto);
    this.playersService.addDeck(createDeckDto.owner, createdDeck);
    return createdDeck.save();
  }

  async findAll(): Promise<Deck[]> {
    return this.deckModel.find();
  }

  async findOne(id: string): Promise<Deck> {
    return this.deckModel.findOne({ _id: id });
  }

  async update(id: string, updateDeckDto: UpdateDeckDto): Promise<Deck> {
    return this.deckModel.findOneAndUpdate({ _id: id }, updateDeckDto);
  }

  async remove(id: string) {
    const deck = await this.deckModel.findOne({ _id: id });

    await this.playersService.removeDeck(deck);
    return this.deckModel.deleteOne({ _id: id });
  }

  async incrementTotalWins(deck: Deck) {
    return await this.deckModel.findOneAndUpdate(
      { deck },
      { $inc: { total_wins: 1 } },
    );
  }

  async incrementTotalGames(deck: Deck) {
    return await this.deckModel.findOneAndUpdate(
      { deck },
      { $inc: { total_games: 1 } },
    );
  }

  async decrementTotalWins(deck: Deck) {
    return await this.deckModel.findOneAndUpdate(
      { deck },
      { $inc: { total_wins: -1 } },
    );
  }

  async decrementTotalGames(deck: Deck) {
    return await this.deckModel.findOneAndUpdate(
      { deck },
      { $inc: { total_games: -1 } },
    );
  }
}
