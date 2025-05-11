import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineLineChart, AiOutlineDollarCircle, AiOutlineFileSearch, AiOutlineBarChart } from 'react-icons/ai';

const data = [
  { metric: 'Forecast Accuracy (%)', Before: 65, After: 90 },
  { metric: 'USD Hedging Justification', Before: 0, After: 160000000 },
  { metric: 'Manual Contract Reading Hours', Before: 8000, After: 500 },
];

const ArtificialIntelligence: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$8' }}>
          <Text h1>Artificial Intelligence</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            Machine learning solutions that forecast, optimize, and extract value from unstructured data—turning information into strategic action.
          </Text>
        </Flex>

        <Divider css={{ my: '$20', width: '100%' }} />

        {/* Impact Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" justify="center" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Intelligence That Drives the Business</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              Our AI models enhance forecasting precision, support financial hedging strategies, and automate document processing to save time and reduce human error.
            </Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+38%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>forecast accuracy improvement</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">$160M</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>hedging strategies supported</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">-93%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>manual contract reading effort</Text>
              </Flex>
            </Flex>

            <Box css={{ mt: '$20', width: '100%', maxWidth: '900px', height: '400px' }}>
              <Text h4 css={{ mb: '$5' }}>Before vs After AI Deployment</Text>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                  <XAxis type="number" />
                  <YAxis dataKey="metric" type="category" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Before" fill="#8884d8" />
                  <Bar dataKey="After" fill="#12caec" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Flex>
        </Box>

        <Divider css={{ my: '$20' }} />

        {/* Use Cases Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Applied AI Use Cases</Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineLineChart({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Demand Forecasting Engine</Text>
                <Text css={{ color: '$accents7' }}>
                  Predicts sales across product lines, geographies, and channels to better align budgets and supply chain with market dynamics.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineDollarCircle({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Price Transfer Model</Text>
                <Text css={{ color: '$accents7' }}>
                  Quantifies exchange rate impact and recommends financial instrument coverage strategies to protect margins on international products.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineFileSearch({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Contract Intelligence Extractor</Text>
                <Text css={{ color: '$accents7' }}>
                  Automates extraction of key data from large volumes of contracts, invoices, and energy bills—saving over 7,500 hours annually in teams of 20+.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineBarChart({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Forecast Accuracy Evaluator</Text>
                <Text css={{ color: '$accents7' }}>
                  Continuously measures and refines predictive models, offering insights on deviation vs plan, over/under forecasting, and volatility.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default ArtificialIntelligence;
