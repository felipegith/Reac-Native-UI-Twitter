import React from 'react'

import { Container, Option, Foto, Label} from './styles'

import icon1 from '../../../assets/e.png'
import icon2 from '../../../assets/e2.png'
import icon3 from '../../../assets/e3.png'
import icon4 from '../../../assets/e4.png'
import icon5 from '../../../assets/e5.png'
import icon6 from '../../../assets/e6.png'


const FotosStory =[
   {
    chave: String(Math.random()),
    imagem: icon1,
    nome: 'Felipe'
   },

   {
    chave: String(Math.random()),
    imagem: icon2,
    nome: 'Costa'
   },

   {
    chave: String(Math.random()),
    imagem: icon3,
    nome: 'Gomes'
   },

   {
    chave: String(Math.random()),
    imagem: icon4,
    nome: 'Darlan'
   },

   {
    chave: String(Math.random()),
    imagem: icon5,
    nome: 'Oliveira'
   },

   {
    chave: String(Math.random()),
    imagem: icon6,
    nome: 'Julio'
   },
]


export default function Story(){
    return(
        <Container>
            
            {FotosStory.map((fotosNoArray)=>(
                <Option key={fotosNoArray.chave}>
                    <Foto source={fotosNoArray.imagem} />
                    <Label>{fotosNoArray.nome}</Label>
                </Option>
            ))}

            
        </Container>
    )
}