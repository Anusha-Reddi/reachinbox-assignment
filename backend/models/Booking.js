

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Mentor from './Mentor.js';
import Student from './Student.js';

const Booking = sequelize.define('Booking', {
  scheduled_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_premium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Booking.belongsTo(Mentor);
Booking.belongsTo(Student);

export default Booking;


