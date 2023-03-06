import * as S from '../styles/content';
import { useEffect, useState } from 'react';
import SearchBar from './search';
import Box from './compenentBox';
import { GetCoins } from '@/service/api';
import { Coin } from '@/interfaces/coin.interface';
import axios from 'axios';
const MainContent = () => {
const [coins, setCoins] = useState<Coin[]>([]);
function getCoins() {
  GetCoins().then((response) => {
    setCoins(response.data);
  }
    );
}
useEffect(() => {
    getCoins();
}, []);

    return (
        <S.Container>
        <SearchBar />
        <S.Container>

            <Box 
            title='Bitcoin'
            value={coins[0]?.data[0]?.rank}
            />
        </S.Container>
        
        
        </S.Container>
    );
    };

export default MainContent;