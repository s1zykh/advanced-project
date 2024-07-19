import { StoreProvider } from './ui/StoreProvider';
import { craeteReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export {
    StoreProvider, craeteReduxStore, StateSchema, AppDispatch, ThunkExtraArg, ThunkConfig,
};
