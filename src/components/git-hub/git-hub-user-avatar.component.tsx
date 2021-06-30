import { Avatar, Link } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getGitHubUser, GitHubUser } from './api';

const GitHubUserAvatar: FC<{ username: string }> = ({ username }) => {
  const { isLoading, isError, data, error } = useQuery<GitHubUser>(
    `github-user-${username}`,
    () => getGitHubUser(username)
  );

  const avatar = () => (
    <Avatar name={data?.login} src={data?.avatar_url}></Avatar>
  );

  return data ? <Link href={data.html_url}>{avatar()}</Link> : avatar();
};

export default GitHubUserAvatar;
