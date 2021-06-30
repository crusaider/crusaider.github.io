import { Avatar } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getGitHubUser, GitHubUser } from './api';

const GitHubUserAvatar: FC<{ username: string }> = ({ username }) => {
  const { isLoading, isError, data, error } = useQuery<GitHubUser>(
    `github-user-${username}`,
    () => getGitHubUser(username)
  );

  return <Avatar name={data?.login} src={data?.avatar_url}></Avatar>;
};

export default GitHubUserAvatar;
