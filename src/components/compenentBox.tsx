import * as  S from '../styles/componentBox';
import { IBox } from '@/interfaces/box.interface';
import Image from 'next/image';
const Box = ({...props} : IBox) => {
    return (
        <S.Container>
      <h1>img aq</h1>
        <S.Text>{props.title}</S.Text>
        <S.Value>{props.value}</S.Value>
    
        </S.Container>
    );
    };

    export default Box;
