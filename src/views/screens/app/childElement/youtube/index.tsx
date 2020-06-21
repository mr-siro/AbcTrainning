import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Colors} from '@themes';
import {Header} from 'react-native-elements';
import {Images} from '@assets';

export interface Video {
  description: string;
  embeddedUrl: string;
  id: string;
  imageUrl: string;
  name: string;
}

export const YouTubeScreen: React.FunctionComponent = () => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios({
      method: 'get',
      url: 'https://5eec5c4b5e298b0016b69a76.mockapi.io/abcsoft/video',
    })
      .then((response: any) => {
        setVideos(response.data);
      })
      .catch((error: any) => console.error(error));
  };
  const getYoutubeId = (embeddedUrl: string) => {
    return embeddedUrl ? embeddedUrl.split('?v=')[1] : embeddedUrl;
  };
  const renderVideoItem = (item: Video, index: number) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          {backgroundColor: index % 2 ? Colors.Border : Colors.White},
        ]}
        onPress={() => setVideoId(item.embeddedUrl)}>
        <Image
          source={{uri: item.imageUrl}}
          style={[
            styles.itemImage,
            {
              borderWidth: item.embeddedUrl === videoId ? 5 : 0,
              borderColor: Colors.Blue,
            },
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <Header
        containerStyle={{backgroundColor: Colors.AppColor.backgroundAcient}}
        leftComponent={
          <Image source={Images.ICYouTube} style={{width: 85, height: 40}} />
        }
      />
      <YouTube videoId={getYoutubeId(videoId)} style={styles.video} />
      <FlatList
        data={videos}
        renderItem={({item, index}) => renderVideoItem(item, index)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
