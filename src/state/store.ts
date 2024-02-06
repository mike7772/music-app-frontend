import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "./slice/songSlice";
import {
  addSongSaga,
  deleteSongSaga,
  editSongSaga,
  songSaga,
} from "./saga_requests";
import { all } from "redux-saga/effects";

const saga = createSagaMiddleware();

function* rootSaga() {
  yield all([songSaga(), addSongSaga(), editSongSaga(), deleteSongSaga()]);
}

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(saga),
});

saga.run(rootSaga);

export default store;
