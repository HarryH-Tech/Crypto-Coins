interface ISpecificCoinData {
  name: string;
  market_cap_rank: integer;
  genesis_date: string;
}

type GetSpecificCryptoAction = {
  type: string;
  cryptoName: string;
};

type InitialState = {
  sidebarMenuShowing: Boolean;
  specificCoinData: String;
  allCryptos: [];
  loading: false;
  error: String;
};
