import { signIn, signOut } from 'next-auth/react';
import { useAccount, useDisconnect } from 'wagmi';
import { Text, HStack, Avatar } from '@chakra-ui/react';
import { useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ButtonConnect = () => {
  const { disconnect } = useDisconnect();
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

  const handleDisconnect = async () => {
    await disconnect();
    signOut({ redirect: false });
  };

  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }
              return (
                <HStack onClick={handleDisconnect} cursor={'pointer'}>
                  <Avatar size="xs" />
                  <Text fontWeight="medium">{account.displayName}</Text>
                </HStack>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ButtonConnect;
