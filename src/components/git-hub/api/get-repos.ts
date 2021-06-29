import { GitHubRepo } from './git-hub-repo';

const getReposOfUser: (username: string) => Promise<GitHubRepo[]> = async (
  username
) => {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);

  if (!res.ok) {
    throw new Error(`Could not get repos of ${username} status: ${res.status}`);
  }

  return res.json();
};

export default getReposOfUser;
