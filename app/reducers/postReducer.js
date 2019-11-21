import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/types';

const initialState = {
    post: []
};

export const postReducer = createReducer(initialState, {
    
    [actionTypes.POST_RESPONSE](state, action) {
        return {
            ...state,
            post:action.response
        };
    },
    
    [actionTypes.POST_FAILED](state) {
        return {
            ...state,
            post: []
        };
    }
});
