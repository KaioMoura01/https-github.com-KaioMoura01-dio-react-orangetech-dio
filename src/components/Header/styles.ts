import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    heigth: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    magin: 0 auto;
`

export const Row =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;  
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    heigth: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    heigth: 30px;
    background-color: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-contents: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18px;
    line-heigth: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-heigth: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    heigth: 32px;
    border-radius: 22px;
    border: 3px solid #FFF;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFF;
`