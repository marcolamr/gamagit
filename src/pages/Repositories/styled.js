import styled from 'styled-components';

export const Main = styled.main`
    height: 100vh;
    background-color: #8257e5;
    padding-bottom: 50px;
`;

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 50px;
`;

export const UserBlock = styled.div`
    display: flex;
    align-items: center;
`;

export const UserImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 1.5rem;
`;

export const UserText = styled.p`
    font-size: 1.2rem;
    color: #FFF;
`;

export const Logo = styled.img`
    width: 200px;
    height: auto;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    padding: 15px 50px;
`;

export const Card = styled.div`
    background-color: #5900B3;
    width: 300px;
    height: 200px;
    padding: 15px;
    border-radius: .3rem;
    margin: 14px 14px 0 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    & h1 {
        font-size: 16px;
        color: #FFF;
    }

    & p {
        font-size: 14px;
        color: #FFF;
        margin-top: 10px;
    }

    & a {
        width: 100px;
        height: 35px;
        background-color: #FFD219;
        color: #5900B3;
        border: none;
        border-radius: .3rem;
        margin-top: 20px;
        cursor: pointer;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

        &:focus,
        &:active {
            outline: none;
            box-shadow: none;
        }
    }
`;