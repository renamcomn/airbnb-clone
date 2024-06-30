import { View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import listingsData from '@/assets/data/airbnb-listings.json'
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json'
import ListingsMap from '@/components/ListingsMap'
import ListingsBottomSheet from '@/components/ListingsBottomSheet'

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');

  const items = useMemo(() => listingsData as any, [])

  const onDataChangef = (category: string) => {
    setCategory(category)
  }

  return (
    <View style={{ flex: 1, marginTop: 140 }}>
      <Stack.Screen 
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChangef} />
        }}
      />
      <ListingsMap listings={listingsDataGeo}/>
      <ListingsBottomSheet listings={items} category={category} />
    </View>
  )
}

export default Page