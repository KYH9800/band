import { all, fork, delay, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';

import {} from '../reducers/post';

function* watchLoadBands() {
  console.log('리덕스 사가: saga generate');
}

export default function* postSaga() {
  yield all([fork(watchLoadBands)]);
}
