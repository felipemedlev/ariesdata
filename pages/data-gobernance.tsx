import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineSafetyCertificate, AiOutlineDatabase, AiOutlineDeploymentUnit, AiOutlineAlert } from 'react-icons/ai';

const data = [
  { metric: 'Long-Term Provision Accuracy (USD)', Before: 0, After: 18000 },
  { metric: 'Regulatory Compliance Risk (Index)', Before: 80, After: 10 },
  { metric: 'Manual Hours in Risk Reporting', Before: 4000, After: 150 },
];

const DataGovernance: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$8' }}>
          <Text h1>Data Governance</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            Build trust, ensure compliance, and streamline access to critical information through automated regulatory processes and centralized data catalogs.
          </Text>
        </Flex>

        <Divider css={{ my: '$20', width: '100%' }} />

        {/* Impact Section */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" justify="center" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Strategic Impact for Governance and Compliance</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              Our data governance projects reduce regulatory risk, ensure transparency, and create reliable foundations for decision-making across the enterprise.
            </Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">+3,800</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>manual hours saved annually</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">$18K</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>savings via improved LTI provisions</Text>
              </Flex>
              <Flex direction="column" align="center" css={{ minWidth: '250px' }}>
                <Text h2 color="primary">-87%</Text>
                <Text span size="$sm" css={{ color: '$accents7' }}>compliance workload reduction</Text>
              </Flex>
            </Flex>

            <Box css={{ mt: '$20', width: '100%', maxWidth: '900px', height: '400px' }}>
              <Text h4 css={{ mb: '$5' }}>Before vs After Governance Automation</Text>
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
            <Text h2>Core Governance Projects</Text>

            <Flex wrap="wrap" justify="center" css={{ gap: '$10', mt: '$10' }}>
              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineSafetyCertificate({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Operational Risk Certification Engine</Text>
                <Text css={{ color: '$accents7' }}>
                  Automates banking processes to maintain regulatory certifications, such as operational risk audits, with traceability and consistency.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineAlert({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Credit Risk Automation (B2B)</Text>
                <Text css={{ color: '$accents7' }}>
                  Monitors client credit exposure and automates daily updates for financial decision-makers in B2B sales.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineDatabase({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>Enterprise Data Catalog</Text>
                <Text css={{ color: '$accents7' }}>
                  Enables teams to locate, understand, and use key datasets faster. A foundation for self-service analytics and cross-functional collaboration.
                </Text>
              </Card>

              <Card css={{ p: '$8', mw: '300px' }}>
                <Box css={{ mb: '$4' }}>{AiOutlineDeploymentUnit({ size: 40, color: '#12caec' })}</Box>
                <Spacer y={0.5} />
                <Text h4>LTI Provisioning Framework</Text>
                <Text css={{ color: '$accents7' }}>
                  Automates calculation and reconciliation of long-term incentive provisions, ensuring accuracy and auditability.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default DataGovernance;