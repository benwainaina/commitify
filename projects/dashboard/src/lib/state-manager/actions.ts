/**
 * dashboard actions
 */

import { createAction, props } from "@ngrx/store";
import * as ActionNames from './actions-names';
import { ICommit, ICommitMessage, INotificationType } from "./interfaces";

/**
 * fetch commits
 */
export const fetchCommits = createAction(
    ActionNames.IActionFetchCommits
);

/**
 * set commits
 */
export const setCommits = createAction(
    ActionNames.IActionSetCommits,
    props<{ commits: ICommit[], successMessage: string, notificationType: INotificationType }>()
)

/**
 * error fetching commits
 */
export const setErrorFetchingCommits = createAction(
    ActionNames.IActionSetErrorFetchingCommits,
    props<{ error: string, notificationType: INotificationType }>()
);

/**
 * sets active repository
 */
export const setActiveRepository = createAction(
    ActionNames.IActionSetActiveRepository,
    props<{ repository: string }>()
);

/**
 * sets active github username
 */
export const setActiveGithubUsername = createAction(
    ActionNames.IActionSetActiveRepository,
    props<{ username: string }>()
);

/**
 * fetch commit messages
 */
export const fetchCommitMessages = createAction(
    ActionNames.IActionFetchCommitMessages,
    props<{ commit: string }>()
);

/**
 * set commit messages
 */
export const setCommitMessages = createAction(
    ActionNames.IActionSetCommitMessages,
    props<{ commit: string, commitMessages: ICommitMessage[] }>()
);

/**
 * set error fetching commit messages
 */
export const setErrorFetchingCommitMessages = createAction(
    ActionNames.IActionErrorFetchingCommitMessages,
    props<{ error: string, notificationType: INotificationType }>()
);
