// quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    currentQuestion: 0,
    score: 0,
    showScore: false,
  },
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setShowScore: (state, action) => {
      state.showScore = action.payload;
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
      state.showScore = false;
    },
  },
});

export const { setCurrentQuestion, setScore, setShowScore, resetQuiz } = quizSlice.actions;

export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;
export const selectScore = (state) => state.quiz.score;
export const selectShowScore = (state) => state.quiz.showScore;

export default quizSlice.reducer;
