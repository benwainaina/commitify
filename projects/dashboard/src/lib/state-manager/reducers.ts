/**
 * state manager reducers
 */

import { Action, createReducer, on } from "@ngrx/store";
import { IDashboard } from "./interfaces";
import * as DashboardActions from './actions';
import produce from "immer";
import { DRAFT_STATE } from "immer/dist/internal";


/**
 * initial state of the dashboard
 */
const initialState: IDashboard = {
    isLoadingCommits: false,
    isLoadingCommitMessages: false,
    activeRepository: '',
    githubUsername: '',
    commits: [],
    notification: {
        status: '',
        message: ''
    }
};

/**
 * reducers definitions
 */
const _reducers = createReducer(
    initialState,

    /**
     * set is fetching commits
     */
    on(DashboardActions.fetchCommits, state => produce(state, draft => {
        return {
            ...draft,
            isLoadingCommits: true
        }
    })),

    /**
     * set commits list
     */
    on(DashboardActions.setCommits, (state, action) => produce(state, draft => {
        return {
            ...draft,
            isLoadingCommits: false,
            notification: {
                ...draft.notification,
                status: action.notificationType,
                message: action.successMessage
            },
            commits: action.commits
        }
    })),

    /**
     * set error fetching commits
     */
    on(DashboardActions.setErrorFetchingCommits, (state, action) => produce(state, draft => {
        return {
            ...draft,
            notification: {
                ...draft.notification,
                status: action.notificationType,
                message: action.error
            }
        }
    })),

    /**
     * set active respository
     */
    on(DashboardActions.setActiveRepository, (state, action) => produce(state, draft => {
        return {
            ...draft,
            activeRepository: action.repository
        }
    })),

    /**
     * set active username
     */
    on(DashboardActions.setActiveGithubUsername, (state, action) => produce(state, draft => {
        return {
            ...draft,
            githubUsername: action.username
        }
    })),

    /**
     * fetch commit messages
     */
    on(DashboardActions.fetchCommitMessages, (state, action) => produce(state, draft => {
        return {
            ...draft,
            isLoadingCommitMessages: true
        }
    })),

    /**
     * set commit messages for a given commit
     */
    on(DashboardActions.setCommitMessages, (state, action) => produce(state, draft => {

    })),

    /**
     * set error fetching commit messages
     */
    on(DashboardActions.setErrorFetchingCommitMessages, (state, action) => produce(state, draft => {
        return {
            ...draft,
            notification: {
                ...draft.notification,
                status: action.notificationType,
                message: action.error
            },
            isLoadingCommitMessages: false
        }
    })),
)

/**
 * reducers wrapper
 */
export function reducers (state: IDashboard, action: Action) {
    return _reducers(state, action);
}
