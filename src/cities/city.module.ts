import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesService } from './city.service';
// import { CitiesController } from './city.controller';
import { City } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  providers: [CitiesService],
  // controllers: [CitiesController],
})
export class CitiesModule {}
