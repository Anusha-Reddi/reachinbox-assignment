import express from 'express';
import { createMentor, getAllMentors } from '../controllers/mentorController.js';

const router = express.Router();

router.post('/', createMentor);
router.get('/', getAllMentors);

export default router;
