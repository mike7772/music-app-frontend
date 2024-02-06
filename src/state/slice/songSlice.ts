import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  song: [],
  isLoading: false,
  isError: "",
};

const songState = createSlice({
  name: "song",
  initialState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsSuccess: (state, action) => {
      state.song = action.payload;
      state.isLoading = false;
    },
    addSong: (state, action) => {
      state.isLoading = true;
    },
    addSongSuccess: (state, action ) => {
      state.song.push(action.payload);
      state.isLoading = false;
    },
    deleteSong: (state, action) => {
      state.isLoading = true;
    },
    deleteSongSuccess: (state, action) => {
      state.isLoading = false;
    },
    editSong: (state, action) => {
      state.isLoading = true;
    },
    editSongSuccess: (state, action) => {
      state.song = state.song.map((song: any) => {
        if (song.id === action.payload.id) {
          return {
            ...song,
            title: action.payload.title,
          };
        }
        return song;
      });
      state.isLoading = false;
    },
    getSongError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const {
  getSongsFetch,
  getSongsSuccess,
  getSongError,
  addSong,
  addSongSuccess,
  editSong,
  editSongSuccess,
  deleteSong,
  deleteSongSuccess,
} = songState.actions;
export const selectSong = (state: any) => state.songs.song;

export default songState.reducer;