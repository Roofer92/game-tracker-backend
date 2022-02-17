import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DecksService } from 'src/decks/decks.service';
import { PlayersService } from 'src/players/players.service';
import { WinconditionsService } from 'src/winconditions/winconditions.service';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from './entities/game.entity';
import { GameDocument } from './schemas/game.schema';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Game') private gameModel: Model<GameDocument>,
    private playersService: PlayersService,
    private decksService: DecksService,
    private winconditionsService: WinconditionsService,
  ) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const createdGame = new this.gameModel(createGameDto);

    // increment total games
    const participants = createdGame.participants;
    participants.forEach((p) => {
      this.playersService.incrementTotalGames(p.player);
      this.decksService.incrementTotalGames(p.deck);

      if (p.isWinner) {
        this.playersService.incrementTotalWins(p.player);
        this.decksService.incrementTotalWins(p.deck);
      }
    });

    // increment total wins
    this.winconditionsService.incrementTotalWins(createdGame.wincondition);

    return createdGame.save();
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.find({});
  }

  async findOne(id: string): Promise<Game> {
    return this.gameModel.findOne({ _id: id });
  }

  async remove(id: string): Promise<any> {
    const game = await this.gameModel.findOne({ _id: id });

    // decrement total games
    game.participants.forEach((p) => {
      this.playersService.decrementTotalGames(p.player);
      this.decksService.decrementTotalGames(p.deck);

      if (p.isWinner) {
        this.playersService.decrementTotalWins(p.player);
        this.decksService.decrementTotalWins(p.deck);
      }
    });

    // decrement total wins
    this.winconditionsService.decrementTotalWins(game.wincondition);

    return this.gameModel.deleteOne({ _id: id });
  }
}
