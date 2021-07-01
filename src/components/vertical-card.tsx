import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {Item} from '../graphql/types';
import {RootNavigationProp} from '../navigation/root';

export interface VerticalCardProps {
  item: Item;
}

const VerticalCard: React.FC<VerticalCardProps> = React.memo(({item}) => {
  const navigation = useNavigation<RootNavigationProp>();

  const handlePress = useCallback(() => {
    navigation.navigate('Detail', {item});
  }, [navigation, item]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: item.image}} />
      <TouchableOpacity
        style={styles.content}
        activeOpacity={0.7}
        onPress={handlePress}>
        <Text style={styles.category}>{item.category.title}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </TouchableOpacity>
    </View>
  );
});

export default VerticalCard;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    height: height * 0.36,
    width: (width - 40) / 2,
    marginBottom: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: '50%',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'flex-start',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#58346b',
    flex: 1,
    padding: 16,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    paddingTop: 8,
    width: '100%',
  },
  category: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#dec17c',
    marginBottom: 1,
  },
  author: {
    overflow: 'hidden',
    fontSize: 12,
    width: '100%',
    paddingTop: 8,
    color: 'white',
    marginBottom: 1,
  },
});
