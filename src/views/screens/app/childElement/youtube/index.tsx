import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {styles} from './styles';
import YouTube from 'react-native-youtube';
import axios from 'axios';
import {Colors} from '@themes';
import {Header} from 'react-native-elements';
import {Images} from '@assets';
import {ItemComponent} from '@components';

export interface Video {
  description: string;
  embeddedUrl: string;
  id: string;
  imageUrl: string;
  name: string;
}

export const YouTubeScreen: React.FunctionComponent = React.memo(() => {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios({
      method: 'get',
      url: 'https://9vujm.sse.codesandbox.io/video',
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
      <ItemComponent
        image={item.imageUrl}
        title={item.name}
        description={item.description}
        isActive={item.embeddedUrl === videoId}
        isHightLight={index % 2 === 0}
        onClick={() => setVideoId(item.embeddedUrl)}
      />
    );
  };

  return (
    <View style={{flex:1}}>
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
});
