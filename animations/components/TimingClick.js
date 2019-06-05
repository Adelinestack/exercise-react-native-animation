import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Animated,
  Easing,
} from 'react-native';

export default class TimingClick extends Component {
  constructor() {
    super();
    this.opacityValue = new Animated.Value(1);
  }

  opacityChange() {
    this.opacityValue.setValue(1);
    Animated.timing(this.opacityValue, {
      toValue: 0.5,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Timing Click</Text>
        </View>
        <View style={styles.container}>
          <Animated.Image
            style={{
              width: 300,
              height: 300,
              opacity: this.opacityValue,
            }}
            source={{
              uri:
                'https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1356&q=80',
            }}
          />
          <Button
            onPress={this.opacityChange.bind(this)}
            title="Change Opacity"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
