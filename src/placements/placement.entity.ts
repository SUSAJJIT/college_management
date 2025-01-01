import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from '../colleges/college.entity';

@Entity()
export class Placement {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College)
  college: College;

  @Column()
  year: number;

  @Column({ nullable: true })
  highest_placement: number;

  @Column({ nullable: true })
  average_placement: number;

  @Column({ nullable: true })
  median_placement: number;

  @Column({ nullable: true })
  placement_rate: number;
}
