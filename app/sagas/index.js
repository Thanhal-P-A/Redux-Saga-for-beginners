import { takeLatest, all ,takeLeading} from 'redux-saga/effects';
import * as types from '../actions/types';
import postSaga from './postSaga';

export default function* watch() {
    yield all([takeLeading(types.POST_REQUEST, postSaga)]);
}