import {Divider, Text, styled, keyframes} from '@nextui-org/react';
import React from 'react';
import Image from 'next/image';
import {Flex} from '../styles/flex';

const companyLogos = [
   {src: '/companies/scotiabank.png', alt: 'Scotiabank'},
   {src: '/companies/bci.png', alt: 'BCI'},
   {src: '/companies/grupodi.png', alt: 'Grupo DI'},
   {src: '/companies/sasf.png', alt: 'SASF'}
];

const scrollX = keyframes({
   '0%': {transform: 'translateX(0)'},
   '100%': {transform: 'translateX(-100%)'},
});

const CarouselContainer = styled('div', {
   display: 'flex',
   overflow: 'hidden',
   width: '100%',
   py: '$10', // Padding top and bottom
   '&:hover .scroll-animation': {
      animationPlayState: 'paused',
   },
});

const CarouselTrack = styled('div', {
   display: 'flex',
   animation: `${scrollX} 130s linear infinite`, // Adjust duration as needed
   animationPlayState: 'running',
   '& > div': {
      flexShrink: 0,
      width: '200px', // Adjust width as needed, make sure it's enough for your logos
      mx: '$8', // Margin left and right for spacing between logos
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
});

const LogoImage = styled(Image, {
   objectFit: 'contain',
   filter: 'grayscale(100%)', // Optional: if you want logos in grayscale
   transition: 'filter 0.3s ease',
   '&:hover': {
      filter: 'grayscale(0%)', // Optional: color on hover
   },
});
export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text h2 css={{ textAlign: 'center' }}>
               A <Text span css={{ color: '$primary', fontWeight: 'bold' }}>Smart Choice</Text>: Trusted by Industry Leaders
            </Text>

            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               We have partnered with industry leaders across finance, retail, and tech to design and implement scalable, data-driven solutions with real business impact. Our clients trust us to unlock operational efficiency, automation, and financial visibility.
            </Text>
            <CarouselContainer>
               <CarouselTrack className="scroll-animation">
                  {[...companyLogos, ...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => ( // Duplicate multiple times for seamless loop
                    <div key={index}>
                       <LogoImage
                          src={company.src}
                          alt={company.alt}
                          width={150} // Adjust as needed
                          height={80} // Adjust as needed
                       />
                    </div>
                 ))}
              </CarouselTrack>
           </CarouselContainer>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
