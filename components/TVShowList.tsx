// components/TVShowList.js
import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const demoData = [
  { id: '1', uri: 'https://via.placeholder.com/150x200?text=TV+Show+1' },
  { id: '2', uri: 'https://via.placeholder.com/150x200?text=TV+Show+2' },
  { id: '3', uri: 'https://via.placeholder.com/150x200?text=TV+Show+3' },
  { id: '4', uri: 'https://via.placeholder.com/150x200?text=TV+Show+4' },
  { id: '5', uri: 'https://via.placeholder.com/150x200?text=TV+Show+5' },
  { id: '6', uri: 'https://via.placeholder.com/150x200?text=TV+Show+6' },
  { id: '7', uri: 'https://via.placeholder.com/150x200?text=TV+Show+7' },
  { id: '8', uri: 'https://via.placeholder.com/150x200?text=TV+Show+8' },
  { id: '9', uri: 'https://via.placeholder.com/150x200?text=TV+Show+9' },
];

const FALLBACK_IMAGE = 'https://via.placeholder.com/150x200?text=No+Image';

export default function TVShowList() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemoData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setShows(demoData.map((show) => ({
          id: show.id,
          uri: show.uri || FALLBACK_IMAGE,
        })));
        setError(null);
      } catch (err) {
        setError('Failed to load TV shows. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDemoData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Popular TV Shows</Text>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Popular TV Shows</Text>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular TV Shows</Text>
      <FlatList
        data={shows}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.show}>
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');
const thumbnailWidth = (width - 40) / 3; // Responsive width for 3 columns with padding

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#141414',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  show: {
    margin: 5,
    width: thumbnailWidth,
  },
  thumbnail: {
    width: thumbnailWidth,
    height: thumbnailWidth * 1.5, // 2:3 aspect ratio for posters
    borderRadius: 5,
  },
  errorText: {
    color: '#E50914',
    fontSize: 16,
    textAlign: 'center',
  },
});