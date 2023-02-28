import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color:#b9feb9;
    width: 30%;
    height: 40px;
    border-radius: 20rem;
    padding:0.5 1rem;
    `
    export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: gray;
    font-size: 1rem;
    font-weight: 700;
    padding: 0 1rem;
    :focus{
        outline: none;
    }
    `
