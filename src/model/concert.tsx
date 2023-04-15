export type Concert = {
  title: string;
  artist: string;
  capacity: number;
  date: Date;
  place: string;
  priceTezos: number;
  contractAddress?: string;
  nft_vendus: number;
};
