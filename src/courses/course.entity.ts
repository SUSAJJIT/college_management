import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from '../colleges/college.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => College)
  college: College;

  @Column()
  course_name: string;

  @Column()
  course_duration: number;

  @Column()
  course_fee: number;
}
