import express from 'express';
import Volunteer from '../models/volunteerModel.js';

const router = express.Router();

router.post('/new', async (req, res) => {
  const { name, email, phone, age, gender, occupation, reason } = req.body;
  console.log(req.body)
  try {
    const newVolunteer = new Volunteer({
      name,
      email,
      phone,
      age,
      gender,
      occupation,
      reason,
    });

    const savedVolunteer = await newVolunteer.save();
    res.status(201).json(savedVolunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
