import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    width: 400px;
    margin-bottom: 20px;
    line-heigth: 44px;

    color: #FFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-heigth: 44px;
`

export const SubTitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-heigth: 25px;
`

export const ConcordoText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-heigth: 19px;
    margin: 25px 0;
`

export const FormContainer = styled.form`
    margin-bottom: 40px;   

    input{
        width: 100%;    
        max-width: 275px;
        height: 30px;
        border:none;
        border-bottom: 1px solid #383450;
        background: transparent;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 400;
    }

    textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const TextContainer = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;

    p, a{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-heigth: 19px;
    }

    a{
        margin-left: 5px;
        color: #23dd7a;
        text-decoration: none;
    }
`