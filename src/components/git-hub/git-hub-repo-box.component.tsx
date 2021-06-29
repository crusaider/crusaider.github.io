import { Badge, Box, Heading, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { GitHubRepo } from './api';

const GitHubRepoBox: FC<{ repo: GitHubRepo }> = ({ repo }) => (
  <Box>
    <Heading as="h2" size="sm">
      <Link href={repo.html_url}>{repo.full_name}</Link>
    </Heading>
    {repo.topics ? repo.topics.map((topic) => <Badge>{topic}</Badge>) : null}
    <Text>{repo.description}</Text>
  </Box>
);

export default GitHubRepoBox;
