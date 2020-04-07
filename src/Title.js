/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RNTesterTitle
 * @flow
 */

/* eslint-disable no-use-before-define */

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 10,
    marginBottom: 0,
    height: 45,
    padding: 10,
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    fontWeight: "500"
  }
});
