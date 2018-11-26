// @flow strict

import * as React from 'react';
import { FlatList, View } from 'react-native';
import StyleSheet from '../PlatformStyleSheet/index';

import Text from '../Text/index';
import iconsMap from './icons.json';

import Icon from './index';

const keyExtractor = item => item;
const renderItem = ({ item }) => (
  <View key={item} style={styles.item}>
    <Text>{item}</Text>
    <Icon name={item} size={40} />
  </View>
);

const IconsList = () => (
  <FlatList
    data={Object.keys(iconsMap)}
    keyExtractor={keyExtractor}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.list}
    numColumns={2}
    renderItem={renderItem}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default IconsList;