import React from 'react'
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'; 


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const icons ={
    Home:{
        lib: MaterialCommunityIcons,
        name: 'home-minus'
    },

    Notification:{
        lib: Feather,
        name: 'search'
    },

    Search:{
        lib: Feather,
        name: 'bell'
    },

    Inbox:{
        lib: MaterialIcons,
        name: 'forward-to-inbox'
    },

}

import Home from '../screens/Home/Home'
import Notification from '../screens/Notification/Notification'
import Search from '../screens/Search/Search'
import Inbox from '../screens/Inbox/Inbox'
import { ActivityIndicator } from 'react-native';

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({color, size}) =>{
                const {lib: Icon,name } = icons[route.name]
                return <Icon name={name} size={size} color={color}/>
             }
        })}
            tabBarOptions={{
                style:{
                    backgroundColor: '#141f27',
                    borderTopColor: 'rgba(255,255,255,0.2)'
                    
                },
                activeTintColor: '#00acee'
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                title: ''
            }}
            />

            <Tab.Screen 
            name="Notification" 
            component={Home} 
            options={{
                title: ''
            }}
            />

            <Tab.Screen
             name="Search" 
             component={Home}
             options={{
                title: ''
            }}
            />
            <Tab.Screen 
            name="Inbox"
            component={Home}
            options={{
                title: ''
            }}
            />
        </Tab.Navigator>
    )
}