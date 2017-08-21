import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import UserReducer from './reducer_user';
import SidebarReducer from './reducer_sidebar';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  user: UserReducer,
  sidebar: SidebarReducer
});

export default rootReducer;
