import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//import createEncryptor from 'redux-persist-transform-encrypt';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

/*
const encryptor = createEncryptor({
  secretKey: 'D%>6jKXn^*BGhyd',
  onError: function (error) {
    console.log(error)
  }
});
*/

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer, composeWithDevTools(
    applyMiddleware(logger)
  ));

export const persistor = persistStore(store);