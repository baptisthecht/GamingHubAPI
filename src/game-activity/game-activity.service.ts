import { Injectable, NotFoundException } from '@nestjs/common';
import { createGameActivityDto } from './dto/createGameActivity.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GameActivityService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(body: createGameActivityDto, senderId: number) {
    const { gameId, points, won, tries } = body;
    const player = this.prismaService.user.findUnique({
      where: { id: senderId },
    });
    if (!player) {
      return new NotFoundException('Player not found');
    }
    const game = this.prismaService.game.findUnique({
      where: { id: gameId },
    });
    if (!game) {
      return new NotFoundException('Game not found');
    }
    await this.prismaService.gameActivity.create({
      data: {
        points: points,
        won: won,
        tries: tries,
        player: { connect: { id: senderId } },
        game: { connect: { id: gameId } },
      },
    });
    if (won) {
      await this.prismaService.user.update({
        where: { id: senderId },
        data: { points: { increment: points } },
      });
    }
    return { message: 'Game activity created' };
  }
}
