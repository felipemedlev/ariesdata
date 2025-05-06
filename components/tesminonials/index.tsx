import {Button, Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {QuotesIcon} from '../icons/QuotesIcon';
import {Flex} from '../styles/flex';

export const Testimonials = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',
               'py': '$20',
               'flexDirection': 'column-reverse',
               '@sm': {
                  justifyContent: 'space-around',
                  px: '$32',
                  flexDirection: 'row-reverse',
               },
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Flex direction="column" css={{gap: '1.5rem'}}>
               <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text h5 weight={'bold'}>Significant Hour Savings</Text>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              +75K Of Annual hours released. Our data-driven initiatives help companies reallocate effort from repetitive tasks to strategic priorities, across Latin America.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text h5 weight={'bold'}>Strategic & Scalable Solutions</Text>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              We begin by mapping pain points, hidden inefficiencies, and fragmented workflows — then design scalable solutions aligned with your business priorities.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>

               <Card>
                  <Card.Body>
                     <Flex
                        css={{
                           py: '$10',
                           gap: '$5',
                        }}
                     >
                        <Flex direction={'column'} css={{gap: '0.5rem'}}>
                           <Text h5 weight={'bold'}>Tailored Business Intelligence</Text>
                           <Text
                              span
                              css={{
                                 maxWidth: '400px',
                                 color: '$accents8',
                              }}
                           >
                              Our framework delivers measurable efficiency, financial clarity, and business intelligence—tailored for complex, high-demand organizations.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'start'}
               direction={'column'}
               css={{
                  'alignItems': 'center',
                  '@sm': {
                     alignItems: 'start',
                  },
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  REAL RESULTS, REAL IMPACT
               </Text>
               <Text h3>We Don&apos;t Just Show Dashboards. We Show Results.</Text>
               <Text span css={{color: '$accents8', maxW: '600px', pb: '$8'}}>
                  A track record of impact, not just technology. We turn insight into execution with the right combination of expertise, agility, and business acumen.
               </Text>
               <Button>Read case studies</Button>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
