import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>We Have Answers</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Find answers to common questions about our services, approach, and the impact we deliver for organizations like yours.
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What kind of results can we expect from your solutions?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We focus on delivering measurable impact. Our clients typically see significant reductions in manual hours (we&apos;ve helped release over 75,000 annual hours), enhanced financial visibility, and improved decision-making. Our data-driven initiatives empower companies to reallocate effort from repetitive tasks to strategic priorities.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What is your typical process for a new project?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Our approach is collaborative and structured. It begins with &apos;Brainstorm & Discovery&apos; to understand your pain points and objectives. We then move to &apos;Structured Planning & Roadmap&apos; involving an efficiency diagnosis. Next is &apos;Agile Prototyping & Validation&apos; where we build and test an MVP. Finally, we proceed with &apos;Full Implementation & Adoption&apos;, including training and result tracking.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        How do you ensure data security and regulatory compliance?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Security and compliance are paramount. All our frameworks are meticulously designed for traceability, robust governance, and adherence to regulatory standards, including compatibility with systems like SAP, GCP, and financial regulations such as IFRS/NIIF.
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        What industries do you primarily serve?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        We have a strong track record across various sectors, with significant experience in finance, retail, and tech. We&amp;apos;ve partnered with major players like Scotiabank, BCI Corredora de Bolsa, Grupo DI, and SASF to implement scalable, data-driven solutions that deliver real business impact.
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
