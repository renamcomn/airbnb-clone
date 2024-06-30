import React, { useEffect, useRef, useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { Text, View, StyleSheet, Platform } from 'react-native'
import MapView, { Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps'
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';

interface Props {
    listings: any;
}

const ListingsMap = ({listings} : Props) => {
    const router = useRouter();
    const mapRef = useRef<any>(null);
    const [initialRegion, setInitialRegioan] = useState({
        latitude: -15.830569515555569,
        longitude: -48.05873259414214,
        latitudeDelta: 1,
        longitudeDelta: 1
    })
    
    const onMarkerSelected = (event: any) => {
        router.push(`/listing/${event.properties.id}`);
    };

    const onLocateMe = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
    
        let location = await Location.getCurrentPositionAsync({});
    
        const region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        };

        setInitialRegioan(region)
    
        mapRef.current?.animateToRegion(region);
    };

    useEffect(() => {
        onLocateMe();
    }, []);

  return (
    <View style={defaultStyles.container}>
        <MapView 
            ref={mapRef}
            style={StyleSheet.absoluteFillObject}
            initialRegion={initialRegion}
            provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
        >
            {listings.features.map((item: any) => (
                <Marker
                    coordinate={{
                    latitude: item.properties.latitude,
                    longitude: item.properties.longitude,
                    }}
                    key={item.properties.id}
                    onPress={() => onMarkerSelected(item)}>
                    <View style={styles.marker}>
                    <Text style={styles.markerText}>R$ {item.properties.price}</Text>
                    </View>
                </Marker>
            ))}
        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
    marker: {
      padding: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      elevation: 5,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
    },
    markerText: {
      fontSize: 14,
      fontFamily: 'mon-sb',
    },
    locateBtn: {
      position: 'absolute',
      top: 70,
      right: 20,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      elevation: 2,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 6,
      shadowOffset: {
        width: 1,
        height: 10,
      },
    },
  });

export default ListingsMap