import { signIn, signOut, useSession } from 'next-auth/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button, Text, HStack, Avatar, useToast } from '@chakra-ui/react';
import { getEllipsisTxt } from 'utils/format';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { useEffect } from 'react';

const ConnectButton = () => {
  const toast = useToast();
  const { data } = useSession();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  async function signInNext() {
    console.log('Address', address);
    await signIn('credentials', { address, redirect: false });
  }
  useEffect(() => {
    if (isConnected === true) {
      signInNext();
    }
  }, [isConnected]);

  const handleAuth = async () => {
    if (isConnected) {
      await disconnect();
    }
    try {
      connect({ connector: new MetaMaskConnector() });
    } catch (e) {
      toast({
        title: 'Oops, something is wrong...',
        description: (e as { message: string })?.message,
        status: 'error',
        position: 'top-right',
        isClosable: true,
      });
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    signOut({ redirect: false });
  };

  if (data?.user) {
    return (
      <HStack onClick={handleDisconnect} cursor={'pointer'}>
        <Avatar size="xs" />
        <Text fontWeight="medium">{getEllipsisTxt(data.user.address)}</Text>
      </HStack>
    );
  }

  return (
    <Button size="sm" onClick={handleAuth} colorScheme="blue">
      Connect Wallet
    </Button>
  );
};

export default ConnectButton;
