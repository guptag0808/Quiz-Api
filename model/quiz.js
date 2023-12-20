const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
});

const quizSchema = new mongoose.Schema({
  questions: { type: [questionSchema], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
