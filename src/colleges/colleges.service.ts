import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { College } from './college.entity';

@Injectable()
export class CollegesService {
  constructor(
    @InjectRepository(College)
    private collegesRepository: Repository<College>,
  ) {}

  async getFilteredColleges(city: string, state: string): Promise<College[]> {
    return this.collegesRepository
      .createQueryBuilder('college')
      .leftJoinAndSelect('college.city', 'city')
      .leftJoinAndSelect('college.state', 'state')
      .where('city.name = :city', { city })
      .orWhere('state.name = :state', { state })
      .getMany();
  }
}
