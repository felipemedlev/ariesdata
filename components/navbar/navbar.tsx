import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export const Nav = () => {
   const router = useRouter();
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <NextLink href="/">
              <AcmeLogo />
              <Text b color="inherit" hideIn="xs">
                 ARIES
              </Text>
            </NextLink>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="ACME features"
                     onAction={(key) => {

                        if (key === 'autoscaling') {
                           router.push('/efficiency-as-a-service');
                        }
                        if (key === 'usage_metrics') {
                           router.push('/financial_layer');
                        }
                        if (key === 'production_ready') {
                           router.push('/data-gobernance');
                        }
                        if (key === '99_uptime') {
                           router.push('/artificial-intelligence');
                        }
                        // Add other cases for other dropdown items if needed
                     }}
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="autoscaling"
                        showFullDescription
                        description="Process automation and optimization to reduce operational costs and increase productivity."
                        icon={icons.scale}
                        
                     >
                        Efficiency As A Service
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="usage_metrics"
                        showFullDescription
                        description="Dashboards for financial processes. Data pipelines from databases for C-Level insights."
                        icon={icons.activity}
                     >
                        Financial Layer
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="production_ready"
                        showFullDescription
                        description="Regulatory compliance projects and enterprise data catalog creation."
                        icon={icons.flash}
                     >
                        Data Gobernance
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="99_uptime"
                        showFullDescription
                        description="Design and deployment of AI models to solve business challenges."
                        icon={icons.server}
                     >
                        Artificial Intelligence
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="supreme_support"
                        showFullDescription
                        description="Integration of cloud platforms with on-premise systems like SAP, Hyperion, and more."
                        icon={icons.user}
                     >
                        System Connections
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>

               <Navbar.Link isActive href="#">
                  Customers
               </Navbar.Link>
               
               {/*
               <Navbar.Link href="#">Pricing</Navbar.Link>*/}

               <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            {/* <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem> */}
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            {/* <ModalLogin /> */}

            {/* <Navbar.Item>
               <Button auto flat href="#">
                  Start free trial
               </Button>
            </Navbar.Item> */}
            {/* <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="https://github.com/Siumauricio/landing-template-nextui"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item> */}
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
