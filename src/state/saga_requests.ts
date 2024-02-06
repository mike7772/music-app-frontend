import { call, put, takeEvery } from "redux-saga/effects";
import {
  addSongSuccess,
  deleteSongSuccess,
  editSongSuccess,
  getSongsSuccess,
} from "./slice/songSlice";
import axios, { AxiosResponse } from "axios";
const apiUrl = process.env.REACT_APP_API_URL;


function* GetSongsFetch(): Generator<any, void, any> {
  try {
    const response: AxiosResponse<any> = yield axios.get(`${apiUrl}list-song`,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      }
    });
    const formattedSong: any[] = response.data;
    console.log("first", formattedSong)
    yield put(getSongsSuccess(formattedSong));
  } catch (error) {
    console.error('Error fetching songs:', error);
  }
}
function* AddSong(action: any): Generator<any, void, any> {
  try {
    const res = yield call(() =>
      axios.post(`${apiUrl}add-song`, action.payload)
    );
    yield put(addSongSuccess(res.data));
  } catch (error) {
    console.error('Error adding song:', error);
  }
}

function* DeleteSong(action: any): Generator<any, void, any> {
  try {
    const res = yield call(() =>
      axios.delete(`${apiUrl}remove-song/${action.payload}`)
    );
    yield put(deleteSongSuccess(res.data.title));
  } catch (error) {
    console.error('Error deleting song:', error);
  }
}

function* EditSong(action: any): Generator<any, void, any> {
  try {
    const res = yield call(() =>
      axios.patch(`${apiUrl}update-song/${action.payload.id}`, action.payload)
    );
    yield put(editSongSuccess(res.data));
  } catch (error) {
    console.error('Error editing song:', error);
  }
}

function* songSaga() {
  yield takeEvery("song/getSongsFetch", GetSongsFetch);
}

function* addSongSaga() {
  yield takeEvery("song/addSong", AddSong);
}

function* editSongSaga() {
  yield takeEvery("song/editSong", EditSong);
}
function* deleteSongSaga() {
  yield takeEvery("song/deleteSong", DeleteSong);
}

export { songSaga, addSongSaga, editSongSaga, deleteSongSaga };