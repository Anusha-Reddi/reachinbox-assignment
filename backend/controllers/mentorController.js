import Mentor from '../models/Mentor.js';

export const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.findAll();
    res.json(mentors);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching mentors', error });
  }
};


export const createMentor = async (req, res) => {
    try {
      const { name, availability, areas_of_expertise, is_premium } = req.body;
  
      const mentor = await Mentor.create({
        name,
        availability,
        areas_of_expertise,
        is_premium
      });
  
      res.status(201).json(mentor);
    } catch (error) {
      res.status(500).json({ message: 'Error creating mentor', error });
    }
  };


