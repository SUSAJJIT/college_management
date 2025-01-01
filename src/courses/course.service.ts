import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: Repository<Course>,
  ) {}

  findByCollege(collegeId: number) {
    return this.coursesRepository.find({
      where: { college: { id: collegeId } },
      order: { course_fee: 'DESC' },
    });
  }
}
