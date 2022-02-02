/**
 * dashboard module feature key
 */
export const IDashboardModuleFeatureKey = 'dashboardModule';

/**
 * notification type
 */
export type INotificationType = '' | 'success' | 'error';

/**
 * dashboard state definitions
 */
export interface IDashboard {

    /**
     * flag for whether the dashboard is loading the commits
     */
    isLoadingCommits: boolean;

    /**
     * flag for whether the dashboard is loading commit messages
     */
    isLoadingCommitMessages: boolean;

    /**
     * active repository which the user has input
     */
    activeRepository: string;

    /**
     * user's github username
     */
    githubUsername: string;

    /**
     * commits list
     */
    commits: ICommit[];
    
    /**
     * notification object for UI engagement with the user
     */
    notification: {
        status: INotificationType;
        message: string;
    }
}

/**
 * commit object definition
 */
export interface ICommit {
    /**
     * name of commit
     */
    title: string;

    /**
     * author of commit
     */
    author: ICommitAuthor;

    /**
     * commit SHA-1
     */
    sha1: string;

    /**
     * time the commit was created
     */
    timePublished: string;

    /**
     * commit messages
     */
    messages: ICommitMessage[];
}

/**
 * commit author definition
 */
export interface ICommitAuthor {

}

/**
 * commit message
 */
export interface ICommitMessage {

}
