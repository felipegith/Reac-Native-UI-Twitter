import React from 'react'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'; 

import { Text, TouchableOpacity } from 'react-native'
import { ContainerArrow, TextoQuantidade ,ContainerQuaLike, ContainerFeed, ContainerTextoPostagem, ContainerLikeRT, TextoFeed, ContainerFotoFeed, Foto, ContainerPost, Nome, ContainerVerify, Nome2, TextoPostagem} from './styles'
import icon2 from '../../../assets/e2.png'



export default function Fed(){
    return(
        <ContainerFeed>
            <ContainerFotoFeed>
                
                <Foto source={icon2} />

                <ContainerPost>

                    <ContainerVerify>
                        <Nome>
                            Costa
                        </Nome>
                        <MaterialIcons name="verified" size={15} color="#fff" />
                        <Nome2>
                            @costaCRF - 29min
                        </Nome2>
                        <ContainerArrow>
                            <EvilIcons name="chevron-down" size={24} color="#7777" />
                        </ContainerArrow>
                    </ContainerVerify>

                    <ContainerTextoPostagem>
                        <TextoPostagem>
                            Mais tarde tem MENGÃO 
                        </TextoPostagem>
                    </ContainerTextoPostagem>
                    
                    <ContainerLikeRT>

                        <ContainerQuaLike>
                            <EvilIcons name="comment" size={24} color="#7777" />
                            <TextoQuantidade>35</TextoQuantidade>
                        </ContainerQuaLike>

                        <ContainerQuaLike>
                            <EvilIcons name="retweet" size={24} color="#7777" />
                            <TextoQuantidade>95</TextoQuantidade>
                        </ContainerQuaLike>
                        
                        <ContainerQuaLike>
                            <EvilIcons name="heart" size={24} color="#7777" />
                            <TextoQuantidade>223</TextoQuantidade>
                        </ContainerQuaLike>

                        <ContainerQuaLike>
                            <EvilIcons name="share-google" size={24} color="#7777" />
                        </ContainerQuaLike>
                        
                    </ContainerLikeRT>
                    
                    
                </ContainerPost>

                
            </ContainerFotoFeed>

            
            
            
        </ContainerFeed>

        
    )
}