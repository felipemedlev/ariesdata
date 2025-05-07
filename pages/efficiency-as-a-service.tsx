import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';

const EfficiencyAsAService: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{px: '$6'}}> {/* Overall horizontal padding */}
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
          css={{
            pt: '$20', // Top padding for the content
            pb: '$10', // Bottom padding for the content, before divider
            width: '100%',
            textAlign: 'center',
            gap: '$8', // Space between title and description
          }}
        >
          <Text
            h1
          >
            Efficiency As A Service
          </Text>
          <Text
            css={{
              color: '$accents8',
              maxWidth: '800px', // Max width for readability
            }}
            size={'$xl'}
            span
          >
            Process automation and optimization to reduce operational costs and increase productivity.
          </Text>
        </Flex>
        <Divider css={{ my: '$20', width: '100%' }} /> {/* Divider with vertical margin and full width */}
      </Box>
    </Layout>
  );
};

export default EfficiencyAsAService;