// import RNFetchBlob from 'rn-fetch-blob'
import * as actions from "../FileCacheAction";
import * as status from "../FileCacheStatus";
import RNFS from 'react-native-fs';

const api = ({ getState, dispatch }) => (next) => async (action) => {
  if (action.type !== actions.RequestFileCache.type) {
    return next(action);
  }

  const { url, onCreate, onStart,method, data, onSuccess, onError } = action.payload;
  if (onStart) dispatch({ type: onStart });

  next(action); 

  var path = RNFS.DocumentDirectoryPath + '/cache.funds';
  
  if(method=="POST")
    RNFS.writeFile(path, JSON.stringify(data), 'utf8')
      .then(() => {
        // General
        dispatch(status.FileCacheSucceeded());
          // Specific
        if (onSuccess) dispatch({ type: onSuccess, payload: data });
      })
      .catch((error) => {
        // General
        dispatch(status.FileCacheFailed());
        // Specific
        if (onError) dispatch({ type: onError, payload: {} });
      });
  else{
    RNFS.exists(path)
    .then((exists)=> {
      if(!exists){
        RNFS.writeFile(path, JSON.stringify(getState().cache), 'utf8')
          .then(() => {
            // General
            dispatch(status.FileCacheSucceeded());
            // Specific
            if (onCreate) dispatch({ type: onCreate, payload: getState().cache });

            RNFS.readFile(path, 'utf8')
              .then((data) => {
                // General
                dispatch(status.FileCacheSucceeded());
                // Specific
                if (onSuccess) dispatch({ type: onSuccess, payload: JSON.parse(data) });
              })
              .catch((error) => {
                // General
                dispatch(status.FileCacheFailed());
                // Specific
                if (onError) dispatch({ type: onError, payload: error });
              });
          })
          .catch((error) => {
            // General
            dispatch(status.FileCacheFailed());
            // Specific
            if (onError) dispatch({ type: onError, payload: {} });
          });
      }
      else{
        RNFS.readFile(path, 'utf8')
          .then((response) => {
            // General
            dispatch(status.FileCacheSucceeded());
            // console.log(JSON.parse(response))
            // Specific
            if (onSuccess) dispatch({ type: onSuccess, payload: JSON.parse(response) });
          })
          .catch((error) => {
            // General
            dispatch(status.FileCacheFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error });
          });
      }
    })
    .catch((error)=>{
      // General
      dispatch(status.FileCacheFailed());
      
      if (onError) dispatch({ type: onError, payload: {} });
    })

    
  }
};

export default api;
