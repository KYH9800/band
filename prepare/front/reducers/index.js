import { HYDRATE } from 'next-redux-wrapper'; // SSR(Server Side Rendering)을 위함
import { combineReducers } from 'redux'; // combineReducers은 reducer 함수를 합쳐주는 역할
// spliting reducer
import user from './user';
import bandPost from './bandPost';

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        bandPost,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
