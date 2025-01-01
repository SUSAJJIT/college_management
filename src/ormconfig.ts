import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { College } from './colleges/college.entity';
import { Placement } from './placements/placement.entity';
import { Course } from './courses/course.entity';
import { City } from './cities/city.entity';
import { State } from './states/state.entity';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'SQLpost@123',
  database: 'college_management',
  //entities: [College, Placement, Course, City, State],
  autoLoadEntities: true,
  synchronize: true, // set to false for production
};
