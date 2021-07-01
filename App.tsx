import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {RootStackScreen} from './src/navigation/root';

const App = () => {
  StatusBar.setBarStyle('light-content', true);
  const client = new ApolloClient({
    uri: 'https://tech.z1.digital/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
