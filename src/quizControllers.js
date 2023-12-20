const Quiz = require('../model/quiz');
const jwt = require('jsonwebtoken');

const createQuiz = async (req, res) => {
  try {
    const { questions, options, rightAnswer, startDate, endDate } = req.body;
    
    // You may want to add more validation here

    const newQuiz = new Quiz({
      questions,
      options,
      rightAnswer,
      startDate,
      endDate,
    });

    const savedQuiz = await newQuiz.save();

    res.status(201).json(savedQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getActiveQuiz = async (req, res) => {
  try {
    const now = new Date();

    const activeQuiz = await Quiz.findOne({
      startDate: { $lte: now },
      endDate: { $gte: now },
    });

    if (!activeQuiz) { 
      return res.status(404).json({ message: 'No active quiz found' });
    }

    res.json(activeQuiz);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getQuizResult = async (req, res) => {
	try {
	  const quizId = req.params.id;
	  const userAnswers = req.body.answers; // Assuming answers are sent in the request body
  
	  // Validate if the user has the right to access the result (authentication logic)
	  // Add your authentication and authorization logic here
  
	  const quiz = await Quiz.findById(quizId);
  
	  if (!quiz) {
		return res.status(404).json({ message: 'Quiz not found' });
	  }
  
	  if (!userAnswers || !Array.isArray(userAnswers) || userAnswers.length !== quiz.questions.length) {
		return res.status(400).json({ error: 'Invalid input for user answers' });
	  }
  
	  // Calculate and provide quiz results
	  const correctAnswers = quiz.questions.map((question, index) => {
		return question.correctAnswer === userAnswers[index];
	  });
  
	  const totalQuestions = quiz.questions.length;
	  const correctCount = correctAnswers.filter((isCorrect) => isCorrect).length;
	  const incorrectCount = totalQuestions - correctCount;
  
	  res.json({
		totalQuestions,
		correctCount,
		incorrectCount,
		correctAnswers,
	  });
	} catch (error) {
	  console.error(error);
	  res.status(500).json({ error: 'Internal Server Error' });
	}
  };

const getAllQuizzes = async (req, res) => {
  try {
    const allQuizzes = await Quiz.find();
    res.json(allQuizzes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  createQuiz,
  getActiveQuiz,
  getQuizResult,
  getAllQuizzes,
};
