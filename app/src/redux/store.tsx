import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import chapterReducer from './slices/chapterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chapter: chapterReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch