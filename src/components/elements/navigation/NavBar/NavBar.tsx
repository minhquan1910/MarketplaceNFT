import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Button, Flex, HStack, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  const [display, changeDisplay] = useState('none');
  return (
    <HStack gap={'15px'}>
      <Flex>
        <Flex>
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Home
              </Button>
            </Link>
            <Link href="/transactions" passHref>
              <Button as="a" variant="ghost" aria-label="Transaction" my="5" w="100%">
                Transaction
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button as="a" variant="ghost" aria-label="Marketplace" my="5" w="100%">
                Marketplace
              </Button>
            </Link>
            <Link href="/mint" passHref>
              <Button as="a" variant="ghost" aria-label="Mint" my="5" w="100%">
                Mint
              </Button>
            </Link>
            <Link href="/staking" passHref>
              <Button as="a" variant="ghost" aria-label="Staking" my="5" w="100%">
                Staking
              </Button>
            </Link>
            <Link href="/balances/nft" passHref>
              <Button as="a" variant="ghost" aria-label="Staking" my="5" w="100%">
                My Collection
              </Button>
            </Link>
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
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay('none')}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <Link href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my="5" w="100%">
                Home
              </Button>
            </Link>
            <Link href="/transactions" passHref>
              <Button as="a" variant="ghost" aria-label="Transaction" my="5" w="100%">
                Transaction
              </Button>
            </Link>
            <Link href="/marketplace" passHref>
              <Button as="a" variant="ghost" aria-label="Marketplace" my="5" w="100%">
                Marketplace
              </Button>
            </Link>
            <Link href="/mint" passHref>
              <Button as="a" variant="ghost" aria-label="Mint" my="5" w="100%">
                Mint
              </Button>
            </Link>
            <Link href="/staking" passHref>
              <Button as="a" variant="ghost" aria-label="Staking" my="5" w="100%">
                Staking
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </HStack>
  );
};

export default NavBar;
