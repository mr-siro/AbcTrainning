import React, {useState, useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {styles} from './styles';

export const YouTubeScreen: FunctionComponent = () => {
  const [listVideo, setListVideo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/video',
    })
      .then((res: any) => {
        console.log('res.data', res.data);
        setListVideo(res.data);
      })
      .catch((error: any) => console.error(error));
  };
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity>
        <View style={styles.listContainer}>
          <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
          <View style={styles.rightContent}>
            <Text style={styles.titleStyle} numberOfLines={3}>
              {item.name}
            </Text>
            <Text style={styles.description} numberOfLines={5}>
              {item.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={styles.videoContainer}></View>
      <FlatList
        data={listVideo}
        keyExtractor={(item: any, index: number) => index}
        renderItem={({item, index}) => renderItem(item)}
        style={{paddingVertical: 40}}
      />
    </View>
  );
};
