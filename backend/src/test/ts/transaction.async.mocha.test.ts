import { expect } from 'chai';
import {Column, CreatedAt, DeletedAt, Model, Sequelize, Table} from 'sequelize-typescript';
import { createNamespace } from 'cls-hooked';

const namespace = createNamespace('sequelize-cls-namespace');

(Sequelize as any).__proto__.useCLS(namespace);

// npm run-script test-backend
const testSequelize =  new Sequelize({
  database: 'somedb',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:'
});


@Table
export class User extends Model<User> {

  @Column({primaryKey: true})
  id: string;

  @Column
  name: string;
}

testSequelize.addModels([User]);

describe('DB Model Test', () => {

  it('should automatically pass transaction', async () => {

    await dbLogin();
    await testSequelize.sync();
    await testSequelize.transaction(async () => {
      console.log('before add user 1');
      await asyncSaveAndFindTest()
      await addUser2();
    });


    function dbLogin() {
      testSequelize.authenticate();
      return testSequelize.sync();
    }

    async function asyncSaveAndFindTest(): Promise<User[]> {
      return await new User({ name: 'someName' }).save().then(res => User.findAll());
    }

    // async function addUser2(): Promise<User> {
    //   return await new User({ name: 'someName2' }).save().then(res => {
    //     return Promise.reject(new Error('simulating exception'));
    //   });
    // }

    async function addUser2(): Promise<User> {
      return await new User({ name: 'someName2' }).save();
    }

    async function getUsers(): Promise<User[]> {
      return await User.findAll();
    }

  });

});


