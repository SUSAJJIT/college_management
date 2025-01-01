import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './course.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get(':collegeId')
  findByCollege(@Param('collegeId') collegeId: number) {
    return this.coursesService.findByCollege(Number(collegeId));
  }
}
