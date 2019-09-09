import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fotos"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const initialState = {
  fotos: [],
  queryString: "",
  searchType: "title",
  searchParams: ["Title", "Genre"],
  loading: false,
  error: null
};

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export let persistor = persistStore(store);
