import { Controller, Get, Param } from '@nestjs/common';
import { PlacementsService } from './placements.service';

@Controller('college_data')
export class PlacementsController {
  constructor(private readonly placementsService: PlacementsService) {}

  @Get(':college_id')
  async getCollegeData(@Param('college_id') collegeId: number) {
    const avgSection =
      await this.placementsService.getAveragePlacements(collegeId);
    const placementSection =
      await this.placementsService.getPlacementData(collegeId);
    return { avgSection, placementSection };
  }
}
