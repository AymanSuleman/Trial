import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const FLICKR_API_URL = 'https://api.flickr.com/services/rest/';
const API_KEY = 'YOUR_API_KEY'; // Replace with your Flickr API key
const PER_PAGE = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageGallery: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover', // Adjust as needed
    marginBottom: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Apicalling = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const getCachedImages = async () => {
      try {
        const cachedData = await AsyncStorage.getItem('flickrImages');
        if (cachedData) {
          setImages(JSON.parse(cachedData));
          setIsOffline(true); // Assume offline if data exists in cache
        }
      } catch (error) {
        console.error('Error retrieving cached images:', error);
      }
    };

    getCachedImages();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(FLICKR_API_URL, {
          params: {
            method: 'flickr.photos.getRecent',
            per_page: PER_PAGE,
            page: 1,
            api_key: API_KEY,
            format: 'json',
            nojsoncallback: 1,
            extras: 'url_s',
          },
        });
        setImages(response.data.photos.photo);
        await AsyncStorage.setItem('flickrImages', JSON.stringify(response.data.photos.photo));
        setIsOffline(false);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!images.length || isOffline) {
      fetchData();
    }
  }, []);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.url_s }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      {/* Left navbar can be implemented here (optional) */}
      {isLoading ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.imageGallery}
        />
      )}
    </View>
  );
};

export default Apicalling;


