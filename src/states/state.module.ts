import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesService } from './state.service';
// import { StatesController } from './state.controller';
import { State } from './state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StatesService],
  // controllers: [StatesController],
})
export class StatesModule {}
