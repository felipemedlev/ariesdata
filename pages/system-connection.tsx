import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineCloudServer, AiOutlineShareAlt, AiOutlineGlobal, AiOutlineUnlock } from 'react-icons/ai';

const data = [
  { metric: 'Manual Integration Hours (Annual)', Before: 42000, After: 0 },
  { metric: 'Data Access Cost (Index)', Before: 100, After: 10 },
  { metric: 'ERP System Load (%)', Before: 95, After: 35 },
];

const SystemConnections: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$8' }}>
          <Text h1>System Connections</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            We build scalable, secure bridges between your core systems and modern data platforms—unlocking value, reducing licensing costs, and enabling real-time access.
          </Text>
        </Flex>

        <Divider css={{ my: '$20', width: '100%' }} />

        {/* Impact Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" justify="center" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Infrastructure-Driven Efficiency</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              By connecting ERPs like SAP, Oracle and Softland to platforms such as Google Cloud, AWS, or Azure, we save thousands of hours while boosting performance and access.
            </Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+42,000</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>annual hours saved via automation</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">-90%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>data access licensing cost</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">-60%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>ERP system overload</Text>
              </Flex>
            </Flex>

            <Box css={{ mt: '$20', width: '100%', maxWidth: '900px', height: '400px' }}>
              <Text h4 css={{ mb: '$5' }}>Before vs After Connecting Systems to the Cloud</Text>
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
            <Text h2>Core Integrations</Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineCloudServer({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>SAP ↔ Google Cloud Platform</Text>
                <Text css={{ color: '$accents7' }}>
                  Automates extraction of SAP data to BigQuery, enabling real-time dashboards and eliminating overuse of ERP resources.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineGlobal({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Softland ↔ Google Cloud Platform</Text>
                <Text css={{ color: '$accents7' }}>
                  Connects legacy systems with modern cloud infrastructure for streamlined financial and operational analytics.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineShareAlt({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Oracle ERP ↔ Azure</Text>
                <Text css={{ color: '$accents7' }}>
                  Leverages Microsoft cloud to centralize enterprise data for improved performance, access control, and reporting.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineUnlock({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>AWS ↔ Multi-ERP Sync</Text>
                <Text css={{ color: '$accents7' }}>
                  Enables multi-ERP consolidation and sync with AWS data lakes, unlocking scalability without additional ERP licensing.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default SystemConnections;
