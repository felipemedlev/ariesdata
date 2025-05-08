import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineFileSearch, AiOutlineCalculator, AiOutlineCloudDownload, AiOutlineFileText } from 'react-icons/ai';

const data = [
  { metric: 'Vendor Cost (USD)', Before: 111000, After: 0 },
  { metric: 'Human Hours (Annual)', Before: 2000, After: 0 },
  { metric: 'ERP Capacity (%)', Before: 0, After: 98 },
];

const EfficiencyAsAService: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$8' }}>
          <Text h1>Efficiency As A Service</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            Process automation and optimization to reduce operational costs and increase productivity.
          </Text>
        </Flex>

        <Divider css={{ my: '$20', width: '100%' }} />

        {/* Impact Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" justify="center" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Unlock Real Business Value</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              From finance to operations, we help organizations cut inefficiencies, automate repetitive tasks, and gain strategic clarity—fast. Our solutions are designed for measurable outcomes from day one.
            </Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">$111K</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>in annual vendor cost savings</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+2,000 hrs</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>of human labor saved annually</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+98%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>ERP system capacity released</Text>
              </Flex>
            </Flex>

            <Box css={{ mt: '$20', width: '100%', maxWidth: '900px', height: '400px' }}>
              <Text h4 css={{ mb: '$5' }}>Before vs After Automation Impact</Text>
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

            <Box css={{ mt: '$10', maxWidth: '800px' }}>
              <Text h4>How those 2,000+ hours are distributed:</Text>
              <ul>
                <li><Text>- Accounting & Taxes: 950 hrs/year</Text></li>
                <li><Text>- Master Data Management: 700 hrs/year</Text></li>
                <li><Text>- Manual Reporting Tasks: 350 hrs/year</Text></li>
              </ul>
              <Spacer y={1} />
              <Text size="$lg" css={{ color: '$accents8', mt: '$5' }}>
                These automations not only eliminate dependency on expensive vendors but also free up significant system capacity and allow teams to focus on strategic analysis instead of repetitive tasks.
              </Text>
            </Box>
          </Flex>
        </Box>

        <Divider css={{ my: '$20' }} />

        {/* Use Cases Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Use Cases</Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>
                    {AiOutlineFileSearch({ size: 40, color: '#12caec' })}
                </Box>
                <Spacer y={0.5} />
                <Text h4>XBRL File Reader</Text>
                <Text css={{ color: '$accents7' }}>
                  Our algorithm processes XBRL files and transforms them into a human-readable format, enabling faster financial interpretation.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>
                {AiOutlineFileSearch({ size: 40, color: '#12caec' })}
                </Box>
                <Spacer y={0.5} />
                <Text h4>Automated Tax Calculations</Text>
                <Text css={{ color: '$accents7' }}>
                  We automate income tax and deferred tax calculations by replacing manual spreadsheets used for reporting to tax authorities.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>
                    {AiOutlineFileSearch({ size: 40, color: '#12caec' })}
                </Box>
                <Spacer y={0.5} />
                <Text h4>CMF Competitor Data Reader</Text>
                <Text css={{ color: '$accents7' }}>
                  Automatically extracts and structures competitor financial data from the CMF for quick internal analysis and benchmarking.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>
                    {AiOutlineFileSearch({ size: 40, color: '#12caec' })}
                </Box>
                <Spacer y={0.5} />
                <Text h4>XBRL Creation Engine</Text>
                <Text css={{ color: '$accents7' }}>
                  Connects to Excel files or databases to automatically generate XBRL-compliant reports ready for regulatory submission.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default EfficiencyAsAService;
