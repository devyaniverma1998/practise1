// components/MyListCarousel.js
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const myList = [
  { id: '1', uri: 'https://via.placeholder.com/150x200?text=My+List+1' },
  { id: '2', uri: 'https://via.placeholder.com/150x200?text=My+List+2' },
];

export default function MyListCarousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My List</Text>
      <FlatList
        horizontal
        data={myList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginRight: 10,
  },
  thumbnail: {
    width: 150,
    height: 200,
    borderRadius: 5,
  },
});