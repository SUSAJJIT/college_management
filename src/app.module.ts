import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesModule } from './colleges/colleges.module';
import { CoursesModule } from './courses/course.module';
import { CitiesModule } from './cities/city.module';
import { StatesModule } from './states/state.module';
import { PlacementsModule } from './placements/placements.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'SQLpost@123',
      database: 'college_management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CollegesModule,
    CoursesModule,
    CitiesModule,
    StatesModule,
    PlacementsModule,
  ],
})
export class AppModule {}
