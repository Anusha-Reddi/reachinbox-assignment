
import { Router } from 'express';
import { createBooking, getBookingsForStudent, getAvailableMentors } from '../controllers/bookingController.js';

const router = Router();

router.post('/bookings', createBooking);
router.get('/bookings/:studentId', getBookingsForStudent);
router.get('/available-mentors', getAvailableMentors);

export default router;



