import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import BackgroundImage from './BackgroundImage';
import ExecutorImage from '../../../assets/images/executor.png';

export default function Usage() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BackgroundImage ImagePath={ExecutorImage} Resize="cover">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Background Image</Text>
        </View>
      </BackgroundImage>
    </SafeAreaView>
  );
}