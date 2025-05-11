import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineFundProjectionScreen, AiOutlineDashboard, AiOutlinePieChart, AiOutlineAudit } from 'react-icons/ai';

const data = [
  { metric: 'Monthly Rebate Recovery (USD)', Before: 0, After: 34500 },
  { metric: 'Decision-Making Speed (Index)', Before: 40, After: 90 },
  { metric: 'Manual Report Hours Saved', Before: 80, After: 5 },
];

const FinancialLayer: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$8' }}>
          <Text h1>Financial Layer</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            Strategic dashboards and financial visibility solutions to empower CFOs with real-time insights, cost control, and automated reporting.
          </Text>
        </Flex>

        <Divider css={{ my: '$20', width: '100%' }} />

        {/* Impact Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" justify="center" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Real Business Impact for Financial Leaders</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              Our solutions deliver measurable results in cost recovery, governance, and executive decision-making speed. Designed to support multinational CFOs and finance teams in their transformation journey.
            </Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">$34.5K</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>monthly savings via rebate validation</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+50%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>faster strategic decisions</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">-90%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>manual reporting workload</Text>
              </Flex>
            </Flex>

            <Box css={{ mt: '$20', width: '100%', maxWidth: '900px', height: '400px' }}>
              <Text h4 css={{ mb: '$5' }}>Before vs After Financial Intelligence Deployment</Text>
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
            <Text h2>Flagship Solutions</Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineFundProjectionScreen({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Smart Rebate Validator</Text>
                <Text css={{ color: '$accents7' }}>
                  A centralized interface for validating and receiving rebate invoices. Generates over $34K/month in savings by recovering missed agreements.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineDashboard({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>CFO360 Dashboard</Text>
                <Text css={{ color: '$accents7' }}>
                  A unified command center for monitoring sales across categories, channels, and timeframes. Fully aligned with press releases and business KPIs.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlinePieChart({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>GAV Control Panel</Text>
                <Text css={{ color: '$accents7' }}>
                  Tracks administrative and sales expenses by cost center directly from ERP. Enables financial discipline and transparency.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineAudit({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Modern Cash Flow Engine</Text>
                <Text css={{ color: '$accents7' }}>
                  Replaces outdated spreadsheets with real-time SAP-integrated forecasting, ensuring consistency, auditability, and strategic planning.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default FinancialLayer;
