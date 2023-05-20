import home from "./reducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
