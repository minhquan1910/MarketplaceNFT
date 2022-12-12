import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, IconButton } from '@chakra-ui/react';

import NextLink from 'next/link';
import { useState } from 'react';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  const [display, changeDisplay] = useState('none');
  return (
    <HStack gap={'15px'}>
      <Flex>
        <Flex>
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Home
              </Button>
            </NextLink>
            <NextLink href="/transactions" passHref>
              <Button as="a" variant="ghost" aria-label="Transaction" my="5" w="100%">
                Transaction
              </Button>
            </NextLink>
            <NextLink href="/marketplace" passHref>
              <Button as="a" variant="ghost" aria-label="Marketplace" my="5" w="100%">
                Marketplace
              </Button>
            </NextLink>

            {/* {NAV_LINKS.map((link) => (
            <NavItem key={`link-${link.label}`} {...link} />
            ))} */}
            <NextLink href="/mint" passHref>
              <Button as="a" variant="ghost" aria-label="Mint" my="5" w="100%">
                Mint
              </Button>
            </NextLink>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr="2"
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => changeDisplay('flex')}
          ></IconButton>
        </Flex>

    
        <Flex
          w="100vw"
          bgColor="gray.500"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflow="auto"
          flexDir="column"
          display={display}
        >
          <Flex justify="flex-end">
            <IconButton mt={2} mr={2} aria-label="Close Menu" size="lg" icon={<CloseIcon />} onClick={() => changeDisplay('none')} />
          </Flex>
          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Home
              </Button>
            </NextLink>
            <NextLink href="/transactions" passHref>
              <Button as="a" variant="ghost" aria-label="Transaction" my="5" w="100%">
                Transaction
              </Button>
            </NextLink>
            <NextLink href="/marketplace" passHref>
              <Button as="a" variant="ghost" aria-label="Marketplace" my="5" w="100%">
                Marketplace
              </Button>
            </NextLink>

            {/* {NAV_LINKS.map((link) => (
            <NavItem key={`link-${link.label}`} {...link} />
            ))} */}
            <NextLink href="/mint" passHref>
              <Button as="a" variant="ghost" aria-label="Mint" my="5" w="100%">
                Mint
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        {/* NavMenu */}
      </Flex>
    </HStack>
  );
};

export default NavBar;
