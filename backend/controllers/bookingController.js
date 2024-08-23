
import Booking from '../models/Booking.js';
import Mentor from '../models/Mentor.js';
import Student from '../models/Student.js';
import { Op } from 'sequelize';

export const createBooking = async (req, res) => {
    console.log(req.body);
    try {
        const { studentId, mentorId, scheduled_time, duration, is_premium, cost } = req.body;

        // Check if the mentor exists
        const mentor = await Mentor.findByPk(mentorId);
        if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

        // Ensure mentorAvailability is an array
        let mentorAvailability = mentor.availability;

        // Check if it's a string and parse it
        if (typeof mentorAvailability === 'string') {
            try {
                mentorAvailability = JSON.parse(mentorAvailability);
            } catch (e) {
                return res.status(500).json({ message: 'Error parsing mentor availability data' });
            }
        }

        if (!Array.isArray(mentorAvailability)) {
            return res.status(500).json({ message: 'Mentor availability data is not in the correct format' });
        }

        // Convert scheduled_time to Date object and get hours
        const scheduledDate = new Date(scheduled_time);
        if (isNaN(scheduledDate.getTime())) {
            return res.status(400).json({ message: 'Invalid scheduled time' });
        }

        const bookingTime = scheduledDate.getHours();
        const durationInHours = duration / 60;

        // Check mentor availability
        const isAvailable = mentorAvailability.some(slot => {
            const slotStart = new Date(slot.start).getHours();
            const slotEnd = new Date(slot.end).getHours();
            return bookingTime >= slotStart && bookingTime + durationInHours <= slotEnd;
        });

        // if (!isAvailable) {
        //     return res.status(400).json({ message: 'Mentor not available at the selected time' });
        // }

        // Create the booking
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
        
        console.error('Error creating booking:', error.message);
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
};

  
  

export const getBookingsForStudent = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { StudentId: req.params.studentId } });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

export const getAvailableMentors = async (req, res) => {
  try {
    const { area_of_interest } = req.query;

    const mentors = await Mentor.findAll({
      where: {
        areas_of_expertise: { [Op.contains]: [area_of_interest] },
      },
    });

    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mentors', error });
  }
};



