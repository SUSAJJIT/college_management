import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacementsService } from './placements.service';
import { PlacementsController } from './placements.controller';
import { Placement } from './placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Placement])],
  providers: [PlacementsService],
  controllers: [PlacementsController],
})
export class PlacementsModule {}
