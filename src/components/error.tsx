import {ApolloError} from '@apollo/client';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface ErrorProps {
  error: ApolloError;
}

const Error: React.FC<ErrorProps> = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error.message}</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c124b',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
