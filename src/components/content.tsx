import * as S from '../styles/content';
import SearchBar from './search';
import Box from './compenentBox';
const MainContent = () => {
    return (
        <S.Container>
        <SearchBar />
        <S.Container>

            <Box />
        </S.Container>
        
        </S.Container>
    );
    };

export default MainContent;