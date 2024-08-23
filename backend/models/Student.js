

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  area_of_interest: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Student;



