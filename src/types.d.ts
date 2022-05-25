interface ISpecificCoinData {
  name: string;
  market_cap_rank: integer;
  genesis_date: string;
}

interface GetSpecificCryptoAction {
  type: string;
  cryptoName: string;
}

interface InitialState {
  sidebarMenuShowing: Boolean;
  specificCoinData: String;
  allCryptos: [];
  loading: false;
  error: String;
}

interface ISpecificCoinData {
  ghashing_algorithm: string;
}
