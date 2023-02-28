import * as S from '../styles/header';
import {RiCoinsFill} from 'react-icons/ri';
const Header = () => {
    return (
        <S.Container>
        <div><h1>CryptoSearch </h1> <RiCoinsFill size={25} color='#b9feb9'/> </div>
        </S.Container>
    );
    };

export default Header;