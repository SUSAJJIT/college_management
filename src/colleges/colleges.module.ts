import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegesService } from './colleges.service';
import { CollegesController } from './colleges.controller';
import { College } from './college.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College])],
  providers: [CollegesService],
  controllers: [CollegesController],
})
export class CollegesModule {}
