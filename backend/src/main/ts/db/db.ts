import {Sequelize} from 'sequelize-typescript';
import {User} from '../model/model';

const sequelize =  new Sequelize({
  database: 'general',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:'
});

sequelize.addModels([User]);
