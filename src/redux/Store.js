import nameReducer from "./name/nameReducer"
import { createStore } from "redux"

const Store = createStore(nameReducer)
export default Store;