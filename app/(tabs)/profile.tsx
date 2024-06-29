import { View, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router';

const Page = () => {

  const { signOut, isSignedIn } = useAuth();
  return (
    <View>
      <Button title='Log out' onPress={() => signOut()}></Button>
      {!isSignedIn && 
        <Link href={'/(modals)/login'}>
          Log in
        </Link>
      }
    </View>
  )
}

export default Page