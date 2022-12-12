import { Default } from 'components/layouts/Default';

import { NextPage, GetServerSideProps } from 'next';
import { Mint } from 'components/templates/Mint';

import { IMint } from 'components/templates/Mint/types';
import constants from '../constants';
import Moralis from 'moralis';

const MintPage: NextPage<IMint> = () => {
  return (
    <Default pageName="mint">
      <Mint />
    </Default>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  const items = await Moralis.EvmApi.account.getNFTsForContract({
    address: constants.MRKPLACE_ADDR,
    chain: process.env.APP_CHAIN_ID,
    tokenAddress: constants.NFT_ADDR,
  });

  return {
    props: {
      items: JSON.parse(JSON.stringify(items.result)),
    },
  };
};
export default MintPage;
