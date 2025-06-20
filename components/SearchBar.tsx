// components/SearchBar.js
import { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

const demoData = [
  { id: '1', title: 'Stranger Things', uri: 'https://via.placeholder.com/150x200?text=Stranger+Things' },
  { id: '2', title: 'The Witcher', uri: 'https://via.placeholder.com/150x200?text=The+Witcher' },
  { id: '3', title: 'Breaking Bad', uri: 'https://via.placeholder.com/150x200?text=Breaking+Bad' },
  { id: '4', title: 'The Crown', uri: 'https://via.placeholder.com/150x200?text=The+Crown' },
  { id: '5', title: 'Money Heist', uri: 'https://via.placeholder.com/150x200?text=Money+Heist' },
  { id: '6', title: 'Squid Game', uri: 'https://via.placeholder.com/150x200?text=Squid+Game' },
  { id: '7', title: 'Ozark', uri: 'https://via.placeholder.com/150x200?text=Ozark' },
  { id: '8', title: 'Narcos', uri: 'https://via.placeholder.com/150x200?text=Narcos' },
  { id: '9', title: 'Black Mirror', uri: 'https://via.placeholder.com/150x200?text=Black+Mirror' },
];

const FALLBACK_IMAGE = 'https://via.placeholder.com/150x200?text=No+Image';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setError(null);
      return;
    }

    const handleSearch = async () => {
      try {
        setLoading(true);
        // Simulate search delay
        await new Promise((resolve) => setTimeout(resolve, 500));
        const filteredResults = demoData.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
        setError(filteredResults.length === 0 ? 'No results found.' : null);
      } catch (err) {
        setError('An error occurred while searching.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies or TV shows..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />
      {loading && <ActivityIndicator size="large" color="#E50914" />}
      {error && !loading && (
        <Text style={styles.errorText}>{error}</Text>
      )}
      {!loading && !error && results.length > 0 && (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.result}>
              <Image source={{ uri: item.uri || FALLBACK_IMAGE }} style={styles.thumbnail} />
              <Text style={styles.titleText}>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
      )}
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
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  result: {
    margin: 5,
    width: thumbnailWidth,
  },
  thumbnail: {
    width: thumbnailWidth,
    height: thumbnailWidth * 1.5, // 2:3 aspect ratio for posters
    borderRadius: 5,
  },
  titleText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
  errorText: {
    color: '#E50914',
    fontSize: 16,
    textAlign: 'center',
  },
});