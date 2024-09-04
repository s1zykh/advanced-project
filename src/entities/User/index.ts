import { userReducer, userActions } from './model/slice/userSlice';
import type { UserSchema, User, UserRole } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserInited } from './model/selectors/getUserInited/getUserInited';
import {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/getRoleSelectors';
import { useJsonSettings } from './model/selectors/jsonSettings';

export {
    userReducer,
    User,
    UserRole,
    UserSchema,
    userActions,
    getUserAuthData,
    getUserInited,
    isUserAdmin,
    getUserRoles,
    isUserManager,
    useJsonSettings,
};
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
