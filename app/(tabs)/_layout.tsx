import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
            fontFamily: 'mon-sb'
        }
    }}>
        <Tabs.Screen 
            name='index' 
            options={{ 
                tabBarLabel: 'Explorar',
                tabBarIcon: ({ color, size }) => <Ionicons name='search' color={color} size={size} />
            }}
        />
        <Tabs.Screen 
            name='wishlists' 
            options={{ 
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({ color, size }) => <Ionicons name='heart-outline' color={color} size={size} />
            }}
        />
        <Tabs.Screen 
            name='trips' 
            options={{ 
                tabBarLabel: 'Viagens',
                tabBarIcon: ({ color, size }) => <FontAwesome5 name='airbnb' color={color} size={size} />
            }}
        />
        <Tabs.Screen 
            name='inbox' 
            options={{ 
                tabBarLabel: 'Mensagens',
                tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='message-outline' color={color} size={size} />
            }}
        />
        <Tabs.Screen 
            name='profile' 
            options={{ 
                tabBarLabel: 'Perfil',
                tabBarIcon: ({ color, size }) => <Ionicons name='person-circle-outline' color={color} size={size} />
            }}
        />
    </Tabs>
  )
}

export default _layout