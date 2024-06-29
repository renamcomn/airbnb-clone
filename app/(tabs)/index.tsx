import { View } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');

  const onDataChangef = (category: string) => {
    console.log('CHANGED CATEGORY: ', category)
    setCategory(category)
  }

  return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen 
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChangef} />
        }}
      />
      <Listings listings={[]} category={category} />
    </View>
  )
}

export default Page