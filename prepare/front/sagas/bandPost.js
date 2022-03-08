import { all, fork, delay, takeLatest, put, call } from '@redux-saga/core/effects';
import axios from 'axios';

import {} from '../reducers/bandPost';

export default function* postSaga() {
  yield all([fork()]);
}
