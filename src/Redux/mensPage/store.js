import { configureStore } from '@reduxjs/toolkit';
import appData from './Reducer/data';

export default configureStore({
  reducer: {
	  appData,
  },
})
