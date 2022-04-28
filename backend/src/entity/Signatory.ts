import {Entity, CreateDateColumn, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"

@Entity()
export class Signatory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0

  @Column()
  firstName: string = ""

  @Column()
  lastName: string = ""

  @Column()
  email: string = ""

  @Column()
  job: string = ""

  @Column()
  adress: string = ""

  @Column()
  city: string = ""

  @Column()
  zip: string = ''

  @Column()
  hide: boolean = false

  @CreateDateColumn()
  created_at: Date = new Date();

}
