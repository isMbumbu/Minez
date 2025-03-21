import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const token = 'w5JnlntR_eenqF07jt9sNa0QHfcChLiVW5lsdKBViYw';
      try {
        const response = await fetch(`https://corsproxy.io/?https://trefle.io/api/v1/plants?token=${token}&page=1`);
        const json = await response.json();

        setData(json.data);
      } catch (error) {
        console.error('Fetch error:', error);
        setError('Failed to load plants.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>Loading plants...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Categories</Text>

      {data.map((plant) => (
        <View key={plant.id} style={styles.card}>
          <Text style={styles.name}>{plant.common_name || 'No Name'}</Text>

          <Text style={styles.slug}>{plant.slug}</Text>

          {plant.image_url ? (
            <Image
              source={{ uri: plant.image_url }}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <Text>No Image Available</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop:20,
  },
  card: {
    width:'100%',
 
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor:'rgba(150, 241, 113, 0.5)'
  },
  name: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
    padding: 5,
  },
  slug: {
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom:10
  },
});

export default Categories;
