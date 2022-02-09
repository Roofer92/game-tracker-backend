import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DecksService } from 'src/decks/decks.service';
import { PlayersService } from 'src/players/players.service';
import { WinconditionsService } from 'src/winconditions/winconditions.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { GameDocument } from './schemas/game.schema';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel('Game') private gameModel: Model<GameDocument>,
    private playersService: PlayersService,
    private decksService: DecksService,
    private winconditionsService: WinconditionsService,
  ) {}

  create(createGameDto: CreateGameDto) {
    const createdGame = new this.gameModel(createGameDto);

    // increment total games
    const participants = createdGame.participants;
    participants.forEach((p) => {
      this.playersService.incrementTotalGames(p.player);
      this.decksService.incrementTotalGames(p.deck);
    });

    // increment total wins
    const winner = createdGame.winner;
    this.playersService.incrementTotalWins(winner.player);
    this.decksService.incrementTotalWins(winner.deck);
    this.winconditionsService.incrementTotalWins(createdGame.wincondition);

    return createdGame.save();
  }

  findAll() {
    return `This action returns all games`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }
}
