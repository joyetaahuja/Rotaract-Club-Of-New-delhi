import mongoose from 'mongoose';

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  occupation: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

export default Volunteer;
