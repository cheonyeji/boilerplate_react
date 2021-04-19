// Reducer의 역할
// (previousState, action) => nextState

// 여러개의 reducer를 한개로 합쳐줌
import { combineReducers } from 'redux';

// 회원가입, 로그인 등의 user와 관련된 reducer
import user from './user_reducer';
// 업로드, 다운로드 등 data와 관련된 reducer
// import data from './data_reducer'

const rootReducer = combineReducers({
    user
})

export default rootReducer;