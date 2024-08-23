import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('careercarve_scheduler', 'root', 'root1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;


