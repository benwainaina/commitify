/**
 * definition of action names
 */

/**
 * fetch repository commits
 */
export const IActionFetchCommits = '[Dashboard Component] fetch commit messages';

/**
 * set commits received from backend
 */
export const IActionSetCommits = '[Dashboard Effect] set commits received from backend';

/**
 * error fetching commits
 */
export const IActionSetErrorFetchingCommits = '[Dashboard Effect] error trying to fetch commits';

/**
 * set active repository
 */
export const IActionSetActiveRepository = '[Dashboard Component] set the active repository to get information about';

/**
 * set active github username
 */
export const IActionSetActiveGithubUsername = '[Dashboard Component] set active github username who is owner of the repository';

/**
 * fetch commit messages for a selected commit
 */
export const IActionFetchCommitMessages = '[Dashboard Component] fetch commit messages for given commit';

/**
 * set the received commit messages to their right commit
 */
export const IActionSetCommitMessages = '[Dashboard Effect] set list of commit messages for given commit';

/**
 * error trying to fetch commit messages
 */
export const IActionErrorFetchingCommitMessages = '[Dashboard Effect] error trying to fetch commit messages';
