import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
        fetch(url)
            .then(res => res.json())
            .then(data => setCoins(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <h1 className='text-center text-3xl font-bold text-gray-800'>Available Crypto Currencies</h1>
            <h1 className='text-center mb-12 text-xl font-normal text-gray-500'>Total coins: </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
                {
                    coins.map(coin => <CoinCard key={coin.id} coin={coin} />)
                }
            </div>
        </div>
    );
};

export default Coins;