const express = require('express');
const router = express.Router();
const quizController = require('../src/quizControllers');
const { authenticate } = require('../utils/auth');

// POST /api/quizzes
router.post('/quizzes', authenticate, quizController.createQuiz);

// GET /api/quizzes/active
router.get('/quizzes/active', authenticate, quizController.getActiveQuiz);

// GET /api/quizzes/:id/result
router.get('/quizzes/:id/result', authenticate, quizController.getQuizResult);

// GET /api/quizzes/all
router.get('/quizzes/all', authenticate, quizController.getAllQuizzes);

module.exports = router;
