import type { NextPage } from 'next';
import { Nav } from '../components/navbar/navbar';
import { Layout } from '../components/navbar/layout';
import { Box } from '../components/styles/box';
import { Text, Divider, Card, Spacer } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';
import { AiOutlineTeam, AiOutlineGlobal, AiOutlineRocket, AiOutlineBulb } from 'react-icons/ai';

const Company: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        {/* Intro Section */}
        <Flex direction="column" justify="center" align="center" css={{ pt: '$20', pb: '$10', textAlign: 'center', gap: '$6' }}>
          <Text h1>About Us</Text>
          <Text css={{ color: '$accents8', maxWidth: '800px' }} size={'$xl'} span>
            Founded in 2018, Aries Analytics is a Latin American data consultancy built by senior professionals with more than 10 years of experience in AI, data engineering, and automation.
          </Text>
        </Flex>

        <Divider css={{ my: '$20' }} />

        {/* Who We Are */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex wrap="wrap" justify="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>{AiOutlineTeam({ size: 40, color: '#12caec' })}</Box>
              <Spacer y={0.5} />
              <Text h4>Experts in Data</Text>
              <Text css={{ color: '$accents7' }}>
                Our team has led initiatives in analytics, forecasting, automation, and AI across finance, retail, and public institutions.
              </Text>
            </Card>

            <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>{AiOutlineGlobal({ size: 40, color: '#12caec' })}</Box>
              <Spacer y={0.5} />
              <Text h4>Regional Scope</Text>
              <Text css={{ color: '$accents7' }}>
                We have delivered projects in Chile, Peru, and Colombia, tailoring solutions to diverse regulatory and business environments.
              </Text>
            </Card>

            <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>{AiOutlineRocket({ size: 40, color: '#12caec' })}</Box>
              <Spacer y={0.5} />
              <Text h4>Built for Impact</Text>
              <Text css={{ color: '$accents7' }}>
                Our mission is to unlock business value through scalable data architecture and smart automation—saving time, cost, and effort.
              </Text>
            </Card>

            <Card css={{ p: '$8', mw: '300px' }}>
              <Box css={{ mb: '$4' }}>{AiOutlineBulb({ size: 40, color: '#12caec' })}</Box>
              <Spacer y={0.5} />
              <Text h4>Innovation Partners</Text>
              <Text css={{ color: '$accents7' }}>
                We have collaborated with BCI, Scotiabank, and the Santiago Chamber of Commerce to build cutting-edge solutions from scratch.
              </Text>
            </Card>
          </Flex>
        </Box>

        <Divider css={{ my: '$20' }} />

        {/* Vision & Culture */}
        <Box css={{ px: '$6', pb: '$20' }}>
          <Flex direction="column" align="center" css={{ gap: '$10', textAlign: 'center' }}>
            <Text h2>Our Philosophy</Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              We believe that the power of data should be accessible, actionable, and valuable to everyone—from C-level executives to technical teams. We combine business understanding with technical depth to make it happen.
            </Text>
            <Text css={{ maxWidth: '800px', color: '$accents8' }} size={'$lg'}>
              Whether it's building forecasting models, automating tax processes, or integrating multi-cloud infrastructure, our goal is the same: simplify complexity and generate measurable impact.
            </Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Company;
