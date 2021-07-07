import styled from 'styled-components';

export const Main = styled.main`
    height: 100vh;
    background-color: #8257e5;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 280px;
    margin-bottom: 2.5rem;
`;

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: none;
    width: 20rem;
    height: 3rem;
    padding: 1rem;
    border-radius: .25rem 0 0 .25rem;
    color: #585858;
    
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    width: 8rem;
    height: 3rem;
    border: none;
    background-color: #FFD219;
    color: #585858;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
    padding: 0 .5rem;
    transition: 0.3s;

    font-size: .9rem;
    font-weight: 700;
    text-transform: uppercase;

    &:hover {
        background-color: #FFBA19;
    }

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    background-color: #FF0DEB;
    min-width: 280px;
    padding: .7rem 1rem;
    text-align: center;
    font-size: .65rem;
    color: #FFF;
    font-weight: 700;
    margin-top: 1rem;
`;