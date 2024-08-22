import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ReduxStoreWithManager, ThunkExtraArg, ThunkConfig,
} from './config/StateSchema';

export { StoreProvider } from './ui/StoreProvider';

export type {
    StateSchema, AppDispatch, ThunkExtraArg, ThunkConfig,
};

export { createReduxStore } from './config/store';
