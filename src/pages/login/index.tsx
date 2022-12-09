import { useNavigate } from "react-router-dom";
import{useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {api} from "../../services/api";
import { IFormData } from "./types";
import {Container,Title, Column, CriarText, EsqueciText, Row, SubTitleLogin, TitleLogin, Wrapper}
    from './styles';

const schema = yup.object({
    email: yup.string().email('Insira um formato de email válido').required(),
    password: yup.string().min(8, 'Insira no mínimo 8 caracteres').required(),
  }).required();


const Login = () => {

    const navigate = useNavigate();

    const {control, handleSubmit, formState: {errors, isValid}} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    console.log(isValid, errors);

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            console.log('retorno api', data)
            if(data.length === 1){
                navigate('/feed');
            }else{
                alert('Email ou senha inválidos.');
            }
        }catch{
            alert("Houve um erro, tente novamente.")
        }
    }


    return (<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido  nas empresas mais desejadas.
                </Title>
                
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Email"/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password"/>
                        <Button title="Entrar" variant="secondary" type="submit"></Button>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Esqueci minha senha</CriarText>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
    </>)
}
export {Login}