import React from 'react'
import { Button } from '../Button'
import { IHeader } from './types'
import logo from '../../assets/logo-dio.png'
import { useNavigate } from "react-router-dom";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles"


const Header = ({autenticado}: IHeader) => {
  const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickRegistration = () => {
        navigate('/registration')
    }

    return (

    
    <Wrapper>
        <Container>
            <Row>
                <img src={logo} alt="Logo da Dio"/>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
                
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/96882128?v=4'/>
                ) : (
                    <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickSignIn}></Button>
                        <Button title="Cadastrar" onClick={handleClickRegistration}></Button>
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}