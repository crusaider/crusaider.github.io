import { GitHubUser } from './git-hub-user';

const getGitHubUser: (username: string) => Promise<GitHubUser> = async (
  username
) => {
  const res = await fetch(`https://api.github.com/users/${username}`);

  if (!res.ok) {
    throw new Error(
      `Could not get github user ${username} status: ${res.status}`
    );
  }

  return res.json();
};

export default getGitHubUser;
