import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema, User } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    userReducer, User, UserSchema, userActions, getUserAuthData, getUserInited,
};
