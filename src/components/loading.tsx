import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Loading: React.FC = () => {
  return <ActivityIndicator style={styles.loadingIndicator} />;
};

export default Loading;

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c124b',
  },
});
