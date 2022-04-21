import axios from "axios"

export const fetchData = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault()
    axios.get(`https://api.coingecko.com/api/v3/coins/${event.target.value}`)
    .then(res => { console.log(res);
        return res.data;})
   
   
   
        //   setSpecificCoinData({
    //     name: res.data.name,
    //     market_cap_rank: res.data.market_cap_rank,
    //     genesis_date:res.data.genesis_date
    //   })

    }
    