/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import ViewPager from '@react-native-community/viewpager';
import { StyleSheet, Text, View } from 'react-native';
import Timing from './components/Timing';
import TimingClick from './components/TimingClick';

export default class App extends Component {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Timing />
        </View>
        <View key="2">
          <TimingClick />
        </View>
      </ViewPager>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
