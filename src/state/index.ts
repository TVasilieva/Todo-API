import { combineReducers, createStore, applyMiddleware, Action } from "redux";
import createSagaMiddleware from "redux-saga";

import { todosReducer } from "./todos/reducer";
import { userReducer } from "./user/reducer";
import { imageReducer } from "./image/reducer";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootSaga } from "./root-saga";

import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
  image: imageReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface ActionPayload<Payload> extends Action {
  payload: Payload;
}
