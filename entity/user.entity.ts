import { IsEmail, IsEnum } from "class-validator";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

export enum Gender {
  Male = "Мужской",
  Female = "Женский",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @IsEnum(Gender)
  @Column({ length: 8 })
  gender: Gender;

  @Column()
  photo: string;

  @CreateDateColumn()
  createdDate: Date;
}
