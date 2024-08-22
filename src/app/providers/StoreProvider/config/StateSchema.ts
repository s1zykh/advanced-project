import {
    EnhancedStore, AnyAction, Reducer,
} from '@reduxjs/toolkit';
import { rtkApi } from 'shared/api/rtlApi';

import type { CombinedState } from 'redux';
import type { AxiosInstance } from 'axios';
import type { ArticleDetailsSchema } from 'entities/Article';
import type { UserSchema } from 'entities/User';
import type { ProfileSchema } from 'features/editableProfileCard';
import type{ LoginSchema } from 'features/AuthByUsername';
import type { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import type{ AddCommentFormSchema } from 'features/addCommentForm';
import type { ArticlesPageSchema } from 'pages/ArticlesPage';
import type { UISchema } from 'features/UI/model/types/UISchema';

export interface StateSchema {
    user: UserSchema
    ui: UISchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,
    loginForm?:LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => MountedReducers;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg
    state: StateSchema
}
