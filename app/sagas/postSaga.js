import {put, call} from 'redux-saga/effects';
import * as postActions from '../actions/postActions';
import post from '../api/methods/post';

export default function* postAsync() {
    
  const response = yield call(post);

  if (response) {
    yield put(postActions.onPostResponse(response.data));
  } else {
    yield put(postActions.postFailed({}));
  }
  
}
