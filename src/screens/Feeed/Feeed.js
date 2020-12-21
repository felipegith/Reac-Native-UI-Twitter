import React from 'react'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'; 

import { Text, TouchableOpacity } from 'react-native'
import { ContainerArrow, TextoQuantidade, ContainerQuaLike, ContainerFeed, ContainerTextoPostagem, ContainerLikeRT, TextoFeed, ContainerFotoFeed, Foto, ContainerPost, Nome, ContainerVerify, Nome2, TextoPostagem} from './styles'
import icon1 from '../../../assets/e4.png'



export default function Feedd(){
    return(
        <ContainerFeed>
            <ContainerFotoFeed>
                
                <Foto source={icon1} />

                <ContainerPost>

                    <ContainerVerify>
                        <Nome>
                            Darlan
                        </Nome>
                        <MaterialIcons name="verified" size={15} color="#fff" />
                        <Nome2>
                            @darlanCos - 4h
                        </Nome2>
                        <ContainerArrow>
                            <EvilIcons name="chevron-down" size={24} color="#7777" />
                        </ContainerArrow>
                    </ContainerVerify>

                    <ContainerTextoPostagem>
                        <TextoPostagem>
                            Era só uma praia hoje
                        </TextoPostagem>
                    </ContainerTextoPostagem>
                    
                    <ContainerLikeRT>

                        <ContainerQuaLike>
                            <EvilIcons name="comment" size={24} color="#7777" />
                            <TextoQuantidade>10</TextoQuantidade>
                        </ContainerQuaLike>
                        <ContainerQuaLike>
                            <EvilIcons name="retweet" size={24} color="#7777" />
                            <TextoQuantidade>5</TextoQuantidade>
                        </ContainerQuaLike>
                        
                        <ContainerQuaLike>
                            <EvilIcons name="heart" size={24} color="#7777" />
                            <TextoQuantidade>15</TextoQuantidade>
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