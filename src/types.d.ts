interface ISpecificCoinData {
    name: string;
    market_cap_rank: integer;
    genesis_date: string;
}

type GetSpecificCryptoAction = {
    type: string
    cryptoName: string;
}