import {Table, Column, DeletedAt, UpdatedAt, CreatedAt, Model, PrimaryKey} from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @Column({primaryKey: true})
  id: string;

  @Column
  name: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}
