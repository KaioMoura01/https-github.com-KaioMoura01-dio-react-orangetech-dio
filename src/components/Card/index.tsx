import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInformation, UserPicture}
    from './styles'



const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'/>
        <Content>
            <UserInformation>
                <UserPicture src='https://avatars.githubusercontent.com/u/96882128?v=4'/>
                <div>
                    <h4>Kaio Moura</h4>
                    <p>Há 3 minutos</p>
                </div>
            </UserInformation>
            <PostInfo>
                <h4>Projeto para curso de React</h4>
                <p>Projeto feito para o curso de React com um clone da página da Dio...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#Javascript #React #JSX #HTML #CSS</h4>
                <p>
                    <FiThumbsUp/> 20
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export {Card}