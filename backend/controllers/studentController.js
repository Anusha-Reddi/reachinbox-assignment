import Student from '../models/Student.js';

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};


export const createBooking = async (req, res) => {
  try {
    const { studentId, mentorId, scheduled_time, duration, is_premium, cost } = req.body;

    const booking = await Booking.create({
      StudentId: studentId,
      MentorId: mentorId,
      scheduled_time,
      duration,
      is_premium,
      cost,
    });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};



