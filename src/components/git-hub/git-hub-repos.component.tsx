import { Skeleton, StackDivider, VStack } from '@chakra-ui/react';
import ErrorMessage from '@components/error-message';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { getReposOfUser, GitHubRepo } from './api';
import GitHubRepoBox from './git-hub-repo-box.component';

const GitHubRepos: FC<{ username: string }> = ({ username }) => {
  const { isLoading, isError, data, error } = useQuery<GitHubRepo[]>(
    `repos-${username}`,
    () => getReposOfUser(username)
  );

  if (isError) {
    return (
      <ErrorMessage
        error={error as Error}
      >{`Could not fetch repos for user ${username}!`}</ErrorMessage>
    );
  }

  return (
    <VStack divider={<StackDivider />} spacing="2" align="stretch">
      {isLoading || !data
        ? new Array(10)
            .fill(0)
            .map((val, index) => <Skeleton key={index} height="30px" />)
        : data.map((repo, index) => <GitHubRepoBox key={index} repo={repo} />)}
    </VStack>
  );
};

export default GitHubRepos;
