import {useQuery} from '@apollo/client';
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import {CATEGORIES_QUERY} from '../graphql/queries';
import {Category} from '../graphql/types';

export interface HorizonalMenuProps {
  selected: string;
  onPress: (item: Category) => void;
}

const HorizonalMenu: React.FC<HorizonalMenuProps> = props => {
  const {data} = useQuery<{categories: Category[]}>(CATEGORIES_QUERY, {
    fetchPolicy: 'cache-only',
  });

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      {data?.categories.map(item => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.7}
          style={[
            styles.tabItem,
            props.selected === item.id ? styles.tabItemFocused : {},
          ]}
          onPress={() => props.onPress(item)}>
          <Text style={styles.tabItemText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizonalMenu;

const styles = StyleSheet.create({
  scrollContainer: {
    marginLeft: 16,
  },
  tabItem: {
    backgroundColor: '#535582',
    borderRadius: 8,
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 12,
  },
  tabItemText: {
    color: '#ddedf7',
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 20,
  },
  tabItemFocused: {
    backgroundColor: '#9c87c3',
  },
});
