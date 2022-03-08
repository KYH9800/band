import { all, fork } from 'redux-saga/effects'; // saga의 effects
import axios from 'axios';
// import components
// import userSaga from './user';
import bandPostSaga from './bandPost';
import { backURL } from '../config/config';

axios.defaults.baseURL = backURL; // 'http://localhost:3065';
axios.defaults.withCredentials = true;

// '*' : generator - using yield
// rootSaga 하나 만들어 놓고 만들고싶은 비동기 액션을 하나씩 넣어준다
export default function* rootSaga() {
  yield all([
    // fork(userSaga),
    fork(bandPostSaga),
  ]);
} // all은 배열을 받고 배열안에 받은 것들을 한방에 실행해준다
