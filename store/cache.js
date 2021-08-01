import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { RequestFileCache, FileUrl } from "./FileCacheAction";
import { RequestFirestore } from "./FirestoreAction";
import moment from 'moment';
import { FileCacheRequested } from "./FileCacheStatus";
import * as _ from 'lodash';
import produce from "immer";

const slice = createSlice({
  name: "app",
  initialState: {
    cache: {
    },
    loading: false,
    lastFetch: null,
    checked: false,
  },
  reducers: {
    
  },
});

const {
  
} = slice.actions;
export default slice.reducer;

// export const loadUser = () => (dispatch, getState) => {
//   const { lastFetch } = getState().app;

//   const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
//   if (diffInMinutes < 10) return;

//   dispatch(
//     RequestFileCache({
//       url: FileUrl,
//       method: "POST",
//       data: getState().cache,
//       onStart: fileCacheRequested.type,
//       onSuccess: userInCacheReceived.type,
//       onError: cacheRequestFailed.type
//     })
//   )
// }