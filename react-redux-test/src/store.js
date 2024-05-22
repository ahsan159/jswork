import { configureStore } from "@reduxjs/toolkit";
import counter from "./redux/counter";

export default configureStore({
  reducer: {
    counter: counter,
  },
});
