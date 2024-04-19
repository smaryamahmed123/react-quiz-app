import { configureStore } from '@reduxjs/toolkit'
import QuizReducer from '../Store/QuizSlice'

export const store = configureStore({
  reducer: {
    quiz: QuizReducer,
  }
})