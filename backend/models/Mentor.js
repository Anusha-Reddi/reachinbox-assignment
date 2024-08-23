


import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Mentor = sequelize.define('Mentor', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  areas_of_expertise: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Mentor;


