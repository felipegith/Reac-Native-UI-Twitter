import React from 'react'
import { MaterialIcons, EvilIcons } from '@expo/vector-icons'; 

import { Text, TouchableOpacity } from 'react-native'
import { ContainerArrow, TextoQuantidade, ContainerQuaLike, ContainerFeed, ContainerTextoPostagem, ContainerLikeRT, TextoFeed, ContainerFotoFeed, Foto, ContainerPost, Nome, ContainerVerify, Nome2, TextoPostagem} from './styles'
import icon1 from '../../../assets/e.png'



export default function Feed(){
    return(
        <ContainerFeed>
            <ContainerFotoFeed>
                
                <Foto source={icon1} />

                <ContainerPost>

                    <ContainerVerify>
                        <Nome>
                            Felipe
                        </Nome>
                        <MaterialIcons name="verified" size={15} color="#fff" />
                        <Nome2>
                            @felipeDev - 1h
                        </Nome2>
                        <ContainerArrow>
                            <EvilIcons name="chevron-down" size={24} color="#7777" />
                        </ContainerArrow>
                    </ContainerVerify>

                    <ContainerTextoPostagem>
                        <TextoPostagem>
                            React Native Clone Twitter
                        </TextoPostagem>
                    </ContainerTextoPostagem>
                    
                    <ContainerLikeRT>

                        <ContainerQuaLike>
                            <EvilIcons name="comment" size={24} color="#7777" />
                            <TextoQuantidade>40</TextoQuantidade>
                        </ContainerQuaLike>
                        <ContainerQuaLike>
                            <EvilIcons name="retweet" size={24} color="#7777" />
                            <TextoQuantidade>200</TextoQuantidade>
                        </ContainerQuaLike>
                        
                        <ContainerQuaLike>
                            <EvilIcons name="heart" size={24} color="#7777" />
                            <TextoQuantidade>430</TextoQuantidade>
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