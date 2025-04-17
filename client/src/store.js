import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const initialState = {};

// NOTE: createStoreの場合は明示的に設定していた値が、configureStoreではデフォルトで指定されている。
// 例: thunkはデフォルトのmiddlewareに含まれている https://redux-toolkit.js.org/api/configureStore#middleware
// 例: devToolsはデフォルトで有効 https://redux-toolkit.js.org/api/configureStore#devtools
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
});

export default store;
