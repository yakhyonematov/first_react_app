import { legacy_createStore as createStore } from "redux";
import { iceCreamReducer } from "./iceCream/iceCreamReducer";

const store = createStore(iceCreamReducer)

export default store