import { configureStore } from "@reduxjs/toolkit";
import punchDataReducer from "../redux/reducers.ts";

export default configureStore({
  reducer: {
    data: punchDataReducer,
  },
});
