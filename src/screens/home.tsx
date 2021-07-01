import {useQuery} from '@apollo/client';
import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, View, Text, StyleSheet, FlatList} from 'react-native';
import HorizonalMenu from '../components/horizonal-menu';
import Loading from '../components/loading';
import Error from '../components/error';
import VerticalCard from '../components/vertical-card';
import {ITEMS_QUERY, CATEGORIES_QUERY} from '../graphql/queries';
import {Items, Item} from '../graphql/types';

const HomeScreen = () => {
  const [selected, setSelected] = useState('0');
  const {data, client, loading, error} = useQuery<Items>(ITEMS_QUERY);
  const [items, setItems] = useState<Item[]>([]);

  const setTypes = useCallback(() => {
    const types = data!.items
      .filter(
        (v, i, a) => a.findIndex(t => t.category.id === v.category.id) === i,
      )
      .map(item => item.category);

    const categories = [
      {__typename: 'Category', id: '0', title: 'All'},
      ...types,
    ];
    setItems(data!.items);

    client.writeQuery({
      query: CATEGORIES_QUERY,
      data: {categories},
    });
  }, [data, client]);

  useEffect(() => {
    if (selected !== '0') {
      setItems(data!.items.filter(item => item.category.id === selected));
    } else if (data && data.items.length) {
      setTypes();
    }
  }, [selected, data, setTypes]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Learn</Text>
        <HorizonalMenu
          selected={selected}
          onPress={item => setSelected(item.id)}
        />
      </View>
      <View style={styles.contentWrapper}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          data={items}
          renderItem={({item}) => <VerticalCard item={item} />}
          keyExtractor={item => '' + item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#2c124b',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 32,
    paddingBottom: 8,
  },
  contentContainer: {
    display: 'flex',
    paddingHorizontal: 16,
  },
  contentWrapper: {
    paddingTop: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
