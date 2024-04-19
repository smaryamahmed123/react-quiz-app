import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Container, Typography, Paper, Card, CardContent, Grid } from '@mui/material';
import {  selectCurrentQuestion, selectScore, selectShowScore,} from '../Store/QuizSlice';
import { setCurrentQuestion, setScore, setShowScore, resetQuiz } from '../Store/QuizSlice';

const QuizApp = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector(selectCurrentQuestion);
  const score = useSelector(selectScore);
  const showScore = useSelector(selectShowScore);

  const questionsData = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
      correctAnswer: "Harper Lee"
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O"
    }
  ];

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
      dispatch(setScore(score + 1));
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData.length) {
      dispatch(setCurrentQuestion(nextQuestion));
    } else {
      dispatch(setShowScore(true));
    }
  };

 
  const handleResetQuiz = () => {
    dispatch(resetQuiz());
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        Quiz App
      </Typography>

      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        {showScore ? (
          <div>
            <Typography variant="h5" align="center">Your Score: {score} / {questionsData.length}</Typography>
            <Button variant="contained" onClick={handleResetQuiz} style={{ marginTop: '10px' }}>Restart Quiz</Button>
          </div>
        ) : (
          <Card variant="outlined" style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h5">Question {currentQuestion + 1}:</Typography>
              <Typography variant="body1">{questionsData[currentQuestion].question}</Typography>
              <Grid container spacing={2} style={{ marginTop: '10px' }}>
                {questionsData[currentQuestion].options.map((option, index) => (
                  <Grid item xs={6} key={option}>
                    <Button key={index} variant="contained" onClick={() => handleAnswerOptionClick(option)} style={{ marginRight: '10px', marginBottom: '10px' }}>{option}</Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        )}
      </Paper>
    </Container>
  );
}

export default QuizApp;
