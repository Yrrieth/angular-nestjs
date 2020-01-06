import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 20 })
  username: string;

  @Column({name:'password_hash'})
  password: string;

  @Column()
  salt: number;

  /*@BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10, 10);
  }*/
}