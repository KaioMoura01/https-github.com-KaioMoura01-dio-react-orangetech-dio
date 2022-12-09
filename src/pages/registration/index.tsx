import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {ConcordoText, Container, SubTitleLogin, TextContainer ,Title, TitleLogin, Wrapper} from './styles';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './styles';



 const Registration = () => {
  
  const navigate = useNavigate();
  const handleSubmit = () =>{
    navigate('/login');
  }
  return (<>
    <Header/>
    <Container>
      <div>
        <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias
          e entrar mais rápido  nas empresas mais desejadas.
        </Title>
      </div>
      <div>
        <Wrapper>
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
          <FormContainer>
            <input type="text" placeholder='Nome completo'/>
            <input type="text" placeholder='E-mail'/>
            <input type="text" placeholder='Senha'/>
          </FormContainer>
          <Button title='Criar minha conta' type='submit' variant='secondary' onClick={handleSubmit}/>
          <ConcordoText>
            Ao clicar em "Criar minha conta", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da Dio.
          </ConcordoText>
          <TextContainer>
            <p>Já tenho conta</p>
            <a href="/login">Fazer login</a>
          </TextContainer>
        </Wrapper>
      </div>
    </Container>
 </> )
}
export {Registration}