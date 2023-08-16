import {View,ScrollView,SafeAreaView, Text} from 'react-native'
import { useState } from 'react'
import { Stack,useRouter } from 'expo-router'

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../constants'
import { ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard } from '../components'

export default function index() {

  const router = useRouter()
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen options={{
          headerStyle:{backgroundColor:COLORS.lightWhite},
          headerShadowVisible: false,
          headerLeft: () => ( <ScreenHeaderBtn iconUrl={icons.menu} dimension='80%'/>),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />),
          headerTitle:"",
        }}/>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex:1, padding: SIZES.medium}}>
            <Welcome />
            <Popularjobs />
            <NearbyJobCard />
          </View>

        </ScrollView>
    </SafeAreaView>
  )
}
