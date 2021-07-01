import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {RootRouteProps} from '../navigation/root';

const DetailScreen = () => {
  const route = useRoute<RootRouteProps<'Detail'>>();
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        contentContainerStyle={styles.contentContainerScrollView}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.article}>Article</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={{uri: item.image}} style={styles.poster} />
        <Text style={styles.overView}>{item.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  article: {
    paddingTop: 16,
    paddingLeft: 16,
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#dec17c',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#2c124b',
  },
  scrollView: {
    flex: 1,
    paddingBottom: 16,
  },
  contentContainerScrollView: {
    paddingBottom: 16,
  },
  poster: {
    resizeMode: 'contain',
    height: height * 0.3,
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 16,
    paddingTop: 16,
  },
  overView: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 16,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});
