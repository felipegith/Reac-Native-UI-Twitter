import React from 'react'
import { Text, View } from 'react-native'
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Wrapper, Header, ContainerSroll } from './styles'
import Story from '../../components/Story/Story'
import Feed from '../Feed/Feed'
import Fed from '../Fed/Fed'
import Feeed from '../Feeed/Feeed'
import Fe from '../Fe/Fe'
import F from '../F/F'

export default function Home(){
    return(
        <Wrapper>
            <Header>
                
                <Feather name="menu" size={24} color="#00acee" />
                <Entypo name="twitter" size={24} color="#00acee" />
                <MaterialCommunityIcons name="star-four-points-outline" size={24} color="#00acee" />
            
            </Header>
            <ContainerSroll>
                
                <Story />

                <Feed />
                <Fed />
                <Feeed />
                <Fe />
                <F />
               
            </ContainerSroll>
                
        </Wrapper>
    )
}