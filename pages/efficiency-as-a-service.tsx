import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';

const EfficiencyAsAService: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main">
        <h1>Efficiency As A Service</h1>
        <p>Process automation and optimization to reduce operational costs and increase productivity.</p>
      </Box>
    </Layout>
  );
};

export default EfficiencyAsAService;