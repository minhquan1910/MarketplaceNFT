import { TNFTBalance } from 'components/templates/balances/NFT/types';
export interface INFTCard
  extends Pick<
    TNFTBalance,
    'amount' | 'contractType' | 'name' | 'symbol' | 'tokenAddress' | 'tokenId' | 'metadata' | 'chain' | 'price'
  > {}

export type ErrorContract = {
  message: string | undefined;
  status: number | undefined;
};
