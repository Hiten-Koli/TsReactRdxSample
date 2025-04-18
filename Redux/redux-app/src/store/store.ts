import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import fileReducer from '../features/file/fileSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    file: fileReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch