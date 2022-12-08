/* eslint-env browser */
import { Button } from 'antd';
import { ethers, Signer } from 'ethers';
import { IITEMCard } from './types';
import { Eth } from '@web3uikit/icons';
import constants from '../../../../constants';
import { resolveIPFS } from 'utils/resolveIPFS';
import React, { FC, useEffect, useState } from 'react';
import { Box, HStack, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { useSigner } from 'wagmi';

const ItemCard: FC<IITEMCard> = ({ contractType, name, symbol, metadata, tokenId }) => {
  const bgColor = useColorModeValue('none', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const descBgColor = useColorModeValue('gray.100', 'gray.600');
  const { data: signer } = useSigner();
  const marketplace = new ethers.Contract(constants.MRKPLACE_ADDR, constants.MRKPLACE_ABI, constants.PROVIDER);
  const marketplaceSigner = new ethers.Contract(constants.MRKPLACE_ADDR, constants.MRKPLACE_ABI, signer as Signer);
  const [price, setPrice] = useState('1');

  const handleSell = async () => {
    const itemId = await marketplace.getItemId(tokenId);
    console.log('price', price);
    console.log('NFT addr ', constants.NFT_ADDR);
    console.log('Item id', itemId.toString());
    const priceBig = ethers.utils.parseUnits(price, 18);
    console.log('Price Big ', priceBig);
    const txSell = await marketplaceSigner.createMarketSale(constants.NFT_ADDR, itemId, { value: priceBig });
    const notify = await txSell.wait();
    console.log('Sell Notify ', notify);
  };

  async function loadPrice() {
    const priceValue = await marketplace.getTokenPrice(tokenId);
    const priceEther = ethers.utils.formatEther(priceValue.toString());
    setPrice(priceEther);
  }

  useEffect(() => {
    loadPrice();
  }, [tokenId]);

  return (
    <>
      <Box maxWidth="315px" bgColor={bgColor} padding={3} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
        <Box maxHeight="260px" overflow={'hidden'} borderRadius="xl">
          <Image
            src={resolveIPFS(metadata?.image as string)}
            alt={'nft'}
            minH="260px"
            minW="260px"
            boxSize="100%"
            objectFit="fill"
          />
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" noOfLines={1} marginTop={2}>
          {name}
        </Box>
        <HStack alignItems={'center'}>
          <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="smaller">
            {contractType}
          </Box>

          <Eth fontSize="20px" />
        </HStack>
        <SimpleGrid columns={2} spacing={4} bgColor={descBgColor} padding={2.5} borderRadius="xl" marginTop={2}>
          <Box>
            <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
              Symbol
            </Box>
            <Box as="h4" noOfLines={1} fontSize="sm">
              {symbol}
            </Box>
          </Box>
          <Box>
            <Box as="h4" noOfLines={1} fontWeight="medium" fontSize="sm">
              Amount
            </Box>
            <Box as="h4" noOfLines={1} fontSize="sm">
              {price} BNB
            </Box>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={1} spacing={4} padding={2.5} borderRadius="xl" marginTop={2}>
          <Button onClick={handleSell}>
            <span>Buy</span>
          </Button>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ItemCard;
