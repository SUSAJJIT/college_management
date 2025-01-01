import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Placement } from './placement.entity';

@Injectable()
export class PlacementsService {
  constructor(
    @InjectRepository(Placement)
    private placementsRepository: Repository<Placement>,
  ) {}

  async getAveragePlacements(collegeId: number) {
    return this.placementsRepository
      .createQueryBuilder('placement')
      .select('placement.year')
      .addSelect('AVG(placement.highest_placement)', 'avg_highest_placement')
      .addSelect('AVG(placement.average_placement)', 'avg_average_placement')
      .addSelect('AVG(placement.median_placement)', 'avg_median_placement')
      .addSelect('AVG(placement.placement_rate)', 'avg_placement_rate')
      .where('placement.college_id = :collegeId', { collegeId })
      .groupBy('placement.year')
      .getRawMany();
  }

  async getPlacementData(collegeId: number) {
    return this.placementsRepository
      .createQueryBuilder('placement')
      .where('placement.college_id = :collegeId', { collegeId })
      .andWhere('placement.highest_placement IS NOT NULL')
      .andWhere('placement.average_placement IS NOT NULL')
      .andWhere('placement.median_placement IS NOT NULL')
      .andWhere('placement.placement_rate IS NOT NULL')
      .getMany();
  }
}
