import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';

export default class Timing extends Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.bounce,
    }).start(() => this.spin());
  }

  render() {
    const rotateValue = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <View>
          <Text>Timing Rotation</Text>
        </View>
        <View style={styles.container}>
          <Animated.Text
            style={{
              transform: [{ rotate: rotateValue }, { scale: 5 }],
            }}
          >
            Hello
          </Animated.Text>
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
