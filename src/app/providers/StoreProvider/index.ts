import { AppDispatch } from './config/store';
import type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkExtraArg,
    ThunkConfig,
    StateSchemaKey,
} from './config/StateSchema';

export { StoreProvider } from './ui/StoreProvider';

export type {
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};

export { createReduxStore } from './config/store';
