import React, { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, ListRenderItem, StyleSheet, Image } from 'react-native'
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { TouchableOpacity } from '@gorhom/bottom-sheet';
interface Props {
    listings: any[];
    category: string;
}

const Listings = ({ listings: items, category } : Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log('RELOAD LISTING: ', items.length)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
      
  }, [category])

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url}} style={styles.image} />
        </View>
      </TouchableOpacity>
    </Link>
  )

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
    marginVertical: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  info: {
    textAlign: 'center',
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginTop: 4,
  },
});


export default Listings