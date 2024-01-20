import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const stripe = require('stripe')('sk_test_51OSjQxKW4OXIG6CaL6s5kELF8PNaGRTTFE1WVAQPUrKfiPT9Qv2gWQPY5vGQALrhUHb2r62JBVvoYxHutOaItTQS00IafbD7Gl');

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart : persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)